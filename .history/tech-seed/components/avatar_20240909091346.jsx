import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarComponent({ img, initials, handleClick }) {
  return (
    <Avatar onClick={handleClick}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
