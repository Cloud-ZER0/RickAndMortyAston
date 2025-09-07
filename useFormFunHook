type FnSetterType<T, K extends keyof T> = (arg: T[K]) => void;

type PrefixedKeys<T, P extends string> = {
	[K in keyof T as `${P}${Capitalize<string & K>}`]: T[K];
};

type FormController<T extends object> = Record<
	keyof PrefixedKeys<T, "set">,
	FnSetterType<T, keyof T>
>;

interface useFormReturnValue<T extends object> {
	form: T;
	controller: FormController<T>;
}

export function useForm<T extends object>(
	inititalValue: T
): useFormReturnValue<T> {
	const [form, setForm] = useState<T>(inititalValue);

	const controller: FormController<T> = useMemo(() => {
		const controller: any = {};

		(Object.keys(form) as Array<keyof T>).forEach((key) => {
			const setterName = `set${
				String(key).charAt(0).toUpperCase() + String(key).slice(1)
			}` as const;
			controller[setterName as keyof typeof controller] = (
				arg: T[typeof key]
			) => setForm((form) => ({ ...form, [key]: arg }));
		});
		return controller as FormController<T>;
	}, [form]);

	return {
		form,
		controller,
	};
}
