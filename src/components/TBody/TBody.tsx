import React, { FC } from 'react';

import './TBody.css';
import { Props } from './TBody.interface';

/**
 * THead is body of table component
 * @returns {React.ReactElement} - returns react element
 */
const TBody: FC<Props> = ({}): React.ReactElement => {
    return (
        <tbody className="tbody">
            <tr className="tbody__tr">
                <td className="tbody__td">
                    2222-22-22 123:33:33
                </td>
                <td className="tbody__td">
                    Cyberunk2077
                </td>
                <td className="tbody__td">
                    12
                </td>
                <td className="tbody__td">
                    22
                </td>
            </tr>
        </tbody>
    );
};

export default TBody;