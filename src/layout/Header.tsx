import { AppBar, AppBarSection, AppBarSpacer, Avatar } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { menuIcon } from '@progress/kendo-svg-icons';
import './Header.css';
import { LanguageSwitch } from "../components/LanguageSwitch.tsx";
import { useTranslation } from "react-i18next";
import {NavLink} from "react-router";

const kendokaAvatar = 'https://demos.telerik.com/kendo-react-ui/assets/suite/kendoka-react.png';

export const Header = () => {
    const { t } = useTranslation();

    return (
        <AppBar themeColor="primary">
            <AppBarSection>
                <Button type="button" fillMode="flat" svgIcon={menuIcon} />
            </AppBarSection>

            <AppBarSpacer style={{ width: 4 }} />

            <AppBarSection>
                <h1 className="title">{t('title')}</h1>
            </AppBarSection>

            <AppBarSpacer style={{ width: 32 }} />

            <AppBarSection>
                <nav className="nav-menu">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        {t("dashboard.menuName")}
                    </NavLink>
                    <NavLink to="/missions" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        {t("mission.menuName")}
                    </NavLink>
                    <NavLink to="/shop" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        {t("shop.menuName")}
                    </NavLink>
                    <NavLink to="/stats" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        {t("stats.menuName")}
                    </NavLink>
                </nav>
            </AppBarSection>

            <AppBarSpacer />

            <AppBarSection className="actions">
                <LanguageSwitch />
            </AppBarSection>

            <AppBarSection>
                <span className="k-appbar-separator" />
            </AppBarSection>

            <AppBarSection>
                <NavLink to="/profile">
                    <Avatar type="image">
                        <img src={kendokaAvatar} alt="KendoReact Layout Kendoka Avatar" />
                    </Avatar>
                </NavLink>
            </AppBarSection>
        </AppBar>
    );
};