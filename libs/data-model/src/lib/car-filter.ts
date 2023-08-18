interface CarFilter {
    search?: string;
    model?: string;
}

interface Page {
    items_per_page: number;
    requesed_page: number;
}

export { CarFilter, Page }
