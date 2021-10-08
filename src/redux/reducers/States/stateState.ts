export interface stateType {
    id: string;
    state_name: string;
    createdAt: Date;
}

interface stateStateProps {
    //fetching
    fetching: boolean,
    fetchingById: boolean,
    creating: boolean,
    updating: boolean,
    deleting: boolean,
    //data
    fetchData: Array<stateType>,
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


export const stateState: stateStateProps = {
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
