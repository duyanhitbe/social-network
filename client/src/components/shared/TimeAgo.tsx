import moment from "moment";

type Props = {
  time: Date | null;
};

export default function TimeAgo({ time }: Props) {
  if (!time) return <></>;

  return <>{moment(time).fromNow()}</>;
}
