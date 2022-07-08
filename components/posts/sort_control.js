import DropDown from "../drop_down";
import SortControlOption from "./sort_control_option";

export default function SortControl({ displaySortControl, setDisplaySortControl, setPostsDisplayed, postsDisplayed }) {    

    const sortTitleAsc = () =>  {
        setPostsDisplayed(
            [...postsDisplayed].sort((a, b) => {
                if (a.attributes.title < b.attributes.title) {
                    return -1;
                } else if (a.attributes.title > b.attributes.title) {
                    return 1;
                } else {
                    return 0;
                }
            })
        );
    }

    const sortTitleDesc = () => {
        setPostsDisplayed(
            [...postsDisplayed].sort((a, b) => {
                if (a.attributes.title > b.attributes.title) {
                    return -1;
                } else if (a.attributes.title < b.attributes.title) {
                    return 1;
                } else {
                    return 0;
                }
            })
        );
    }

    const sortDateAsc = () => {
        setPostsDisplayed(
            [...postsDisplayed].sort((a, b) => {
                const aDate = new Date(a.attributes.publishedAt);
                const bDate = new Date(b.attributes.publishedAt);

                if (aDate < bDate) {
                    return -1;
                } else if (aDate > bDate) {
                    return 1;
                } else {
                    return 0;
                }
            })
        );
    }

    const sortDateDesc = () => {
        setPostsDisplayed(
            [...postsDisplayed].sort((a, b) => {
                const aDate = new Date(a.attributes.publishedAt);
                const bDate = new Date(b.attributes.publishedAt);

                if (aDate > bDate) {
                    return -1;
                } else if (aDate < bDate) {
                    return 1;
                } else {
                    return 0;
                }
            })
        );
    }

    return (
        <DropDown
            display={displaySortControl}
            setDisplay={setDisplaySortControl}
            flexDirection="column"
        >
            <SortControlOption 
                label="Title (Desc)"
                borderTopRadius={10}
                onClick={sortTitleDesc}
            />
            <SortControlOption 
                label="Title (Asc)"
                onClick={sortTitleAsc}
            />
            <SortControlOption 
                label="Date (Desc)"
                onClick={sortDateDesc}
            />
            <SortControlOption 
                label="Date (Asc)"
                borderBottomRadius={10}
                onClick={sortDateAsc}
            />
        </DropDown>
    )
}