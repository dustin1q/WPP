declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>,
				import('astro/zod').ZodLiteral<'avif'>,
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"cssSamples": {
"ClipPath-Filters.md": {
	id: "ClipPath-Filters.md";
  slug: "clippath-filters";
  body: string;
  collection: "cssSamples";
  data: any
} & { render(): Render[".md"] };
"Line-clamping.md": {
	id: "Line-clamping.md";
  slug: "line-clamping";
  body: string;
  collection: "cssSamples";
  data: any
} & { render(): Render[".md"] };
"Scroll-Snap.md": {
	id: "Scroll-Snap.md";
  slug: "scroll-snap";
  body: string;
  collection: "cssSamples";
  data: any
} & { render(): Render[".md"] };
"Tabs.md": {
	id: "Tabs.md";
  slug: "tabs";
  body: string;
  collection: "cssSamples";
  data: any
} & { render(): Render[".md"] };
"Toggle-Switch.md": {
	id: "Toggle-Switch.md";
  slug: "toggle-switch";
  body: string;
  collection: "cssSamples";
  data: any
} & { render(): Render[".md"] };
"nth-child.md": {
	id: "nth-child.md";
  slug: "nth-child";
  body: string;
  collection: "cssSamples";
  data: any
} & { render(): Render[".md"] };
};
"uiAccelerators": {
"CompareWidget.md": {
	id: "CompareWidget.md";
  slug: "comparewidget";
  body: string;
  collection: "uiAccelerators";
  data: any
} & { render(): Render[".md"] };
"IntersectionObserver.md": {
	id: "IntersectionObserver.md";
  slug: "intersectionobserver";
  body: string;
  collection: "uiAccelerators";
  data: any
} & { render(): Render[".md"] };
"ServiceWorkerCaching.md": {
	id: "ServiceWorkerCaching.md";
  slug: "serviceworkercaching";
  body: string;
  collection: "uiAccelerators";
  data: any
} & { render(): Render[".md"] };
"Snackbar-Toast.md": {
	id: "Snackbar-Toast.md";
  slug: "snackbar-toast";
  body: string;
  collection: "uiAccelerators";
  data: any
} & { render(): Render[".md"] };
"StarRating.md": {
	id: "StarRating.md";
  slug: "starrating";
  body: string;
  collection: "uiAccelerators";
  data: any
} & { render(): Render[".md"] };
"StepperBar.md": {
	id: "StepperBar.md";
  slug: "stepperbar";
  body: string;
  collection: "uiAccelerators";
  data: any
} & { render(): Render[".md"] };
"a11y-tabs-progressivly-enhanced.md": {
	id: "a11y-tabs-progressivly-enhanced.md";
  slug: "a11y-tabs-progressivly-enhanced";
  body: string;
  collection: "uiAccelerators";
  data: any
} & { render(): Render[".md"] };
};
"uiSamples": {
"DataList-Select.md": {
	id: "DataList-Select.md";
  slug: "datalist-select";
  body: string;
  collection: "uiSamples";
  data: any
} & { render(): Render[".md"] };
"Date-Picker.md": {
	id: "Date-Picker.md";
  slug: "date-picker";
  body: string;
  collection: "uiSamples";
  data: any
} & { render(): Render[".md"] };
"Form-Validation.md": {
	id: "Form-Validation.md";
  slug: "form-validation";
  body: string;
  collection: "uiSamples";
  data: any
} & { render(): Render[".md"] };
"Native-Accordions.md": {
	id: "Native-Accordions.md";
  slug: "native-accordions";
  body: string;
  collection: "uiSamples";
  data: any
} & { render(): Render[".md"] };
"Native-Dialogs.md": {
	id: "Native-Dialogs.md";
  slug: "native-dialogs";
  body: string;
  collection: "uiSamples";
  data: any
} & { render(): Render[".md"] };
"Native-Multi-Select copy.md": {
	id: "Native-Multi-Select copy.md";
  slug: "native-multi-select-copy";
  body: string;
  collection: "uiSamples";
  data: any
} & { render(): Render[".md"] };
"Native-Select.md": {
	id: "Native-Select.md";
  slug: "native-select";
  body: string;
  collection: "uiSamples";
  data: any
} & { render(): Render[".md"] };
"Picklist.md": {
	id: "Picklist.md";
  slug: "picklist";
  body: string;
  collection: "uiSamples";
  data: any
} & { render(): Render[".md"] };
"Progress-Meter.md": {
	id: "Progress-Meter.md";
  slug: "progress-meter";
  body: string;
  collection: "uiSamples";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = never;
}
