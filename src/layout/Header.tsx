import {AppBar, AppBarSection, AppBarSpacer, Avatar} from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import {menuIcon} from '@progress/kendo-svg-icons';
import './Header.css';
import {LanguageSwitch} from "../components/LanguageSwitch.tsx";
import {useTranslation} from "react-i18next";
import {Link} from "react-router";

const kendokaAvatar = 'https://demos.telerik.com/kendo-react-ui/assets/suite/kendoka-react.png';

export const Header = () => {
    const { t } = useTranslation();

    return(
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
                <nav>
                    <Link to="/">Dashboard</Link>
                    <Link to="/missions">Missions</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/stats">Stats</Link>
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
                <Link to="/profile">
                    <Avatar type="image">
                        <img src={kendokaAvatar} alt="KendoReact Layout Kendoka Avatar" />
                    </Avatar>
                </Link>
            </AppBarSection>
        </AppBar>
    )
}