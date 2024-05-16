import moment from "moment";

export const formatDate = (dateStr) => {
  const dt = moment(dateStr).format("yyyy-MM-DD");
  return dt;
};

export const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
