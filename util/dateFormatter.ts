import moment from "moment";

export function createdAtDateFormatter(createdAt: string) {
  const parseDate = moment(createdAt);
  const formateDate = parseDate.format("MMMM Do YYYY");
  return formateDate;
}
export function createdAtDateFormatterWithTime(createdAt: string) {
  const parseDate = moment(createdAt);
  const formateDate = parseDate.format("MMMM Do YYYY , h:mm:ss a");
  return formateDate;
}
export function updatedAtDateFormatter(updatedAt: string) {
  const parseDate = moment(updatedAt);
  const formateDate = parseDate.format("MMMM Do YYYY, h:mm:ss a");
  return formateDate;
}
