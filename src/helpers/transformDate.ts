import moment from "moment";

export const transformDate = (data: string | undefined) => {
  // @ts-ignore
  return Number(moment().year() - moment.utc(data).format("YYYY"));
};
