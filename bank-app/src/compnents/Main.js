
import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function Main() {
    const accounts = useSelector(state => state.accounts)
    const dispatch = useDispatch()
  return (
    <div className='p-5 m-5'>
    <MDBTable>
      <MDBTableHead dark >
        <tr>
          <th scope='col' >Id</th>
          <th scope='col'> CustomerName</th>
          <th scope='col'>AccountNumber</th>
          <th scope='col'>AccountType</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {
                accounts.map(account => {
                    return (
                        <>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {account.id}
                        </th>
                        <td class="py-4 px-6">
                             {account.customerName}
                        </td>
                        <td class="py-4 px-6">
                            {account.accountNumber}
                        </td>
                        <td class="py-4 px-6">
                            {account.accountType}
                        </td>
                        </tr>
                        </>
                    )
                })
            }
      </MDBTableBody>
    </MDBTable>

    </div>
  )
}

// const manageStateToProps = (state) => {
//     return {
//         ...state,
//        accounts :  state.accounts
//     }
// }

// connect(manageStateToProps)(Main)