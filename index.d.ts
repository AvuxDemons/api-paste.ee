declare module 'api-paste.ee' {
    interface Section {
        name?: string;
        syntax?: string;
        contents: string;
    }

    interface NewPasteData {
        contents?: string;
        encrypted?: boolean;
        description?: string;
        expire?: string | { time: string, views: number };
        name?: string;
        syntax?: string;
        sections?: Section[];
    }

    interface PasteResponse {
        status: boolean;
        message: string;
        [key: string]: any;
    }

    interface SyntaxResponse {
        [key: string]: any;
    }

    class Paste_ee {
        constructor(key?: string);

        new(data: NewPasteData | string): Promise<PasteResponse>;

        delete(id: string): Promise<PasteResponse>;

        get(id: string): Promise<PasteResponse>;

        getList(display?: number, page?: number): Promise<PasteResponse>;

        syntaxList(): Promise<SyntaxResponse>;

        syntax(id: string): Promise<SyntaxResponse>;
    }

    export default Paste_ee;
}
