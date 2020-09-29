function* idGenerator(): IterableIterator<number> {
    let id = 0;
    while(true) {
        yield id++;
    }
};

export const idIterator = idGenerator();
