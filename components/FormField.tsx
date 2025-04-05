import React from "react";
import {
	FormControl,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
	name: Path<T>;
	control: Control<T>;
	label?: string;
	placeholder?: string;
	type?: "text" | "email" | "password" | "file";
}

const FormField = <T extends FieldValues>({
	control,
	name,
	label,
	placeholder,
	type = "text",
}: FormFieldProps<T>) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<FormItem>
					<FormLabel className="label">{label}</FormLabel>
					<FormControl>
						<Input
							placeholder={placeholder}
							type={type}
							{...field}
							className="input"
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default FormField;
