import React from "react";
import ErrorMessage from "../components/ErrorMessage";

export const withErrorApi = View => props => {
    const [errorApi, setErrorApi] = React.useState(false)

    if (errorApi) {
        return <ErrorMessage />
    }

    return (
        <View
            setErrorApi={setErrorApi}
            {...props}
        />
    )
}
