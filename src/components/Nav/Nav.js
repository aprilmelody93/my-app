import Link from '../Link/Link';
import './nav.css';

export default function Nav(props) {
    const links = [
        {title: "Films", url: "aprilmelodytan.com"},
        {title: "People", url: "aprilmelodytan.com"},
        {title: "Planets", url: "aprilmelodytan.com"},
    ];

    return (
        <nav>
            { links.map((lnk) => (
                <Link lnk={lnk} key={lnk.title}/>
            ))}
        </nav>
    );
}