export interface rateCreateType {
  currency_from: string;
  currency_to: string;
  fx_market: string;
  conversion_rate: string;
  createdAt: Date;
}

export interface rateFetchType {
  currency_from: {
    currency_code: string;
    currency_name: string;
    _id: string;
  };
  currency_to: {
    currency_code: string;
    currency_name: string;
    _id: string;
  };
  fx_market: {
    location_name: string;
    _id: string;
  };
  conversion_rate: string;
  createdAt: Date;
  id: string;
}

interface ratesStateProps {
  //fetching
  fetching: boolean;
  fetchingById: boolean;
  creating: boolean;
  updating: boolean;
  deleting: boolean;
  //data
  fetchData: Array<rateFetchType>;
  fetchByIdData: any;
  createData: any;
  updateData: any;
  deleteData: any;
  //error
  fetchError: any;
  fetchByIdError: any;
  createError: any;
  updateError: any;
  deleteError: any;
}

export const ratesState: ratesStateProps = {
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
};
