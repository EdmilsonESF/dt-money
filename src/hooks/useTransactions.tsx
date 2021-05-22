import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
// import { api } from '../services/api'

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

interface TransactionInput {
  title: string;
  type: string;
  category: string;
  amount: number;
}

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [transactionsArray, setTransactionsArray] = useState(
    [
      {
        id: 1,
        title: 'Venda de carro',
        type: 'deposit',
        category: 'Venda',
        amount: 33000,
        createdAt: new Date().toDateString()
      },
      {
        id: 2,
        title: 'Compra de pc',
        type: 'withdraw',
        category: 'Pc',
        amount: 3500,
        createdAt: new Date().toString()
      }
    ]
  )

  useEffect(() => {
    // api.get('/transactions')
    //   .then(response => setTransactions(response.data.transactions))

    setTransactions(transactionsArray)
  }, [transactionsArray])

  async function createTransaction(transactionInput: TransactionInput) {
    // const response = await api.post('/transactions', {
    //   ...transactionInput,
    //   createdAt: new Date(),
    // })
    // const { transaction } = response.data

    // setTransactions([
    //   ...transactions,
    //   transaction,
    // ])

    const transaction = {
      ...transactionInput,
      id: Math.random(),
      createdAt: new Date().toString(),
    }

    setTransactionsArray([
      ...transactionsArray,
      transaction
    ])
    console.log(transactionsArray)

    setTransactions([
      ...transactionsArray,
    ])
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      { children }
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context;
}