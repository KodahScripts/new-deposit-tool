export interface ReportRowUTA {
  uid: number
  chkdate: string | number
  chk: string | number
  chkAmt: string | number
  totalAmt: string | number
  merchant: string | number
  chkName: string
  user: string
  ref: string
}

export const Account = {
  BMWT: {
    FIXED: 3225,
    FEE: '3331C',
    VARIABLE: 3304,
  },
  WCN: {
    FIXED: 3225,
    FEE: '',
    VARIABLE: 3040,
  },
}
