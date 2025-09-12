import { EngineObject, WHITE } from "littlejsengine";

export class Player extends EngineObject {
    constructor(pos, size) {
        super(pos, size);
        this.color = WHITE;
    }
}
