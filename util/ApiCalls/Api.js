import axios from "axios";




const DEFAULT_URL =
  "https://expense-tracker-react-na-f5f99-default-rtdb.firebaseio.com";

export const AddingData = async (expense) => {
  const response = await axios.post(DEFAULT_URL + "/expenses.json", expense);
  const id = response.data.name;
  return id;
};

export const GetData = async () => {
  //  const response= await axios.get("https://jsonplaceholder.typicode.com/posts")
  let response = await axios({
    method: "get",
    url: DEFAULT_URL + "/expenses.json",
  });

  const expense = [];

  for (const key in response.data) {
   

    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };

    expense.push(expenseObj);
  }

  return expense;
};

export const upDatedExpenses = async (id, expenseData) => {
    

  let response = await axios({
    method: "put",
    url: DEFAULT_URL + `/expenses/${id}.json`,
    data: expenseData,
  });
  return response;
};

export const deleteExpenses = async (id) => {
  let response = await axios({
    method: "delete",
    url: DEFAULT_URL + `/expenses/${id}.json`,
  });
  return response;
};
