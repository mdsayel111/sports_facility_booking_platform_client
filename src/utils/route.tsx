import { NavLink, RouteObject } from "react-router-dom";
import { TMenuItem, TRoute } from "../type/route-type";

// create a function for genarate route for react router dom
export const getReactRouterRoute = (arr: TRoute[]): RouteObject[] => {
    // map by arr and genarate single route
    const routes = arr.map((elem) => {
        // single route obj
        const routeObj: RouteObject = elem.index
            ? { index: true, element: elem.element }
            : { path: elem.path, element: elem.element };

        // if children exist call getReactRouterRoute function recursively to genarate children route
        if (elem.children) {
            routeObj.children = getReactRouterRoute(elem.children)
        }

        return routeObj
    })

    return routes
}


// create a function for genarate route for ant desighn nav items
export const getAntDesighnNavItems = (arr: TRoute[]): TMenuItem[] => {
    // map by arr and genarate single route
    const routes = arr.map((elem) => {

        // single route obj
        const routeObj: TMenuItem = elem.children ?
            {
                label: (<NavLink className={"hover:text-primary"} to={elem.path}>{elem.name}</NavLink>),
                key: elem.name,
                children: getAntDesighnNavItems(elem.children),
            } :
            {
                label: (<NavLink to={elem.path}>{elem.name}</NavLink>),
                key: elem.name
            };

        return routeObj
    })

    return routes
}