import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';

// create theme provider prop type
type TThemeProviderProps = {
    colorPrimary: string;
    colorBgContainer: string;
    children: ReactNode
}

const ThemeProvider = ({ colorPrimary, colorBgContainer, children }: TThemeProviderProps) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    // Seed Token
                    colorPrimary,
                    borderRadius: 2,
                    colorPrimaryTextHover: colorPrimary,

                    // Alias Token
                    colorBgContainer
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
};

export default ThemeProvider;