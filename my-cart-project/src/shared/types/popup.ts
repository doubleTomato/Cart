export interface PopupProps{
    type: "alert" | "confirm" | "modal" ;
    state?: "success" | "confirm" | "error";
    title: string;
    content: string;
    onClose: () =>  void;
    onConfirm?: () => void | Promise<void>;
}