import { cva } from "class-variance-authority";

const ButtonVarients = cva(
  "inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      intent: {
        primary:
          "text-blue-900 bg-blue-100 hover:bg-blue-200 focus-visible:ring-blue-500",
        success:
          "text-green-900 bg-green-100 hover:bg-green-200 focus-visible:ring-green-500",
        danger:
          "text-rose-900 bg-rose-100 hover:bg-rose-200 focus-visible:ring-rose-500",
        default:
          "text-gray-900 bg-gray-100 hover:bg-gray-200 focus-visible:ring-gray-500",
      },
    },
    defaultVariants: {
      intent: "default",
    },
  }
);

export default function Button({ intent, onClick, children }) {
  return (
    <button
      type="button"
      className={ButtonVarients({ intent })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
