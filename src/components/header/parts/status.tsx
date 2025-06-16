type Status = 'beta';

type Props = {
  status: Status;
};

export function Status({ status }: Props) {
  return (
    <div className="bg-elevated-dark rounded-2xl center min-w-11 w-11 h-5.5">
      <span className="body-1 text-placeholder-gray">{status}</span>
    </div>
  );
}
