import { useRouteError } from "react-router-dom";

export default function Error() {

    const error = useRouteError();
    return (
        <>
            <p>Oops,something went wrong....</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </>
    );
}