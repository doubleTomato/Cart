export interface SelectOption{
    label?: string;
    value: string | number;
}

export interface  SelectProps{
    sName: string;
    options: SelectOption[];
    value?: SelectOption;
    onChange: (opt: SelectOption) => void;
    placeholder?: string;
}