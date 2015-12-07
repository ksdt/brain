class Playlist {
    constructor(sources) {
        this.list = sources ? sources : [];
    }

    peek() {
        return this.list[0];
    }

    add(song, index) {
        this.list.splice(index, 0, song);
    }

    remove(index) {
        this.list.splice(index, 1);
    }

    replace(index, song) {
        this.list[index] = song;
    }

    next() {
        var current = this.peek();
        this.list.splice(0, 1);
    }
}
