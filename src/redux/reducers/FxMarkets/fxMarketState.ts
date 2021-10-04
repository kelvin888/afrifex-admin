export interface fxMarketType {
    location_name: string;
    id: string;
    createdAt: Date;
}

interface fxMarketStateProps {
    //fetching
    fetching: boolean,
    fetchingById: boolean,
    creating: boolean,
    updating: boolean,
    deleting: boolean,
    //data
    fetchData: Array<fxMarketType>,
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


export const fxMarketState: fxMarketStateProps = {
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
