export interface SelectOption{
    label?: string;
    size?: string | number;
    color?: string;
    stock?: number;
    additionalPrice?: number;
}

export interface  SelectProps{
    sName: string;
    options: SelectOption[];
    value?: SelectOption;
    onChange: (opt: SelectOption) => void;
    placeholder?: string;
}