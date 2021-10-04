export interface currencyType {
    id: string;
    currency_name: string;
    currency_code: string;
    createdAt: Date;
}

interface currencyStateProps {
    //fetching
    fetching: boolean,
    fetchingById: boolean,
    creating: boolean,
    updating: boolean,
    deleting: boolean,
    //data
    fetchData: Array<currencyType>,
    fetchByIdData: any,
    createData: any,
    updateData: any,
    deleteData: any,
    //error
    fetchError: any,
    fetchByIdError: any,
    createError: any,
    updateError: any,
    deleteError: any,
}


export const currencyState: currencyStateProps = {
     //processing
     fetching: false,
     fetchingById: false,
     creating: false,
     updating: false,
     deleting: false,
     //data
     fetchData: [],
     fetchByIdData: null,
     createData: null,
     updateData: null,
     deleteData: null,
     //error
     fetchError: null,
     fetchByIdError: null,
     createError: null,
     updateError: null,
     deleteError: null,
}
