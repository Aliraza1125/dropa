import { useTheme } from '@mui/material'
import React from 'react'

const CopyCodeIcon = () => {
    const theme = useTheme()
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.59961 11.5525C6.59961 8.82653 6.59961 7.46353 7.44261 6.61653C8.28661 5.76953 9.64361 5.76953 12.3596 5.76953H15.2396C17.9546 5.76953 19.3116 5.76953 20.1556 6.61653C20.9996 7.46353 20.9996 8.82653 20.9996 11.5525V16.3725C20.9996 19.0985 20.9996 20.4615 20.1556 21.3085C19.3126 22.1555 17.9546 22.1555 15.2396 22.1555H12.3596C9.64361 22.1555 8.28661 22.1555 7.44261 21.3085C6.59961 20.4615 6.59961 19.0985 6.59961 16.3725V11.5525Z" fill={theme.palette.primary.main} />
            <path opacity="0.5" d="M4.172 3.32825C3 4.49925 3 6.38525 3 10.1562V12.1562C3 15.9272 3 17.8132 4.172 18.9842C4.789 19.6022 5.605 19.8942 6.792 20.0322C6.6 19.1922 6.6 18.0362 6.6 16.3722V11.5533C6.6 8.82725 6.6 7.46425 7.443 6.61725C8.287 5.77025 9.644 5.77025 12.36 5.77025H15.24C16.892 5.77025 18.04 5.77025 18.878 5.96025C18.74 4.76725 18.448 3.94825 17.828 3.32825C16.657 2.15625 14.771 2.15625 11 2.15625C7.229 2.15625 5.343 2.15625 4.172 3.32825Z" fill={theme.palette.primary.main} />
        </svg>

    )
}

export default CopyCodeIcon