/* JavaScript game engine: 2d vector class, using modern class syntax, containing all standard vector functions and operators */

class Vector2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    
    static fromRadial(angle, radius) {
        const x = radius * Math.sin(angle);
        const y = radius * -Math.cos(angle);
        return new Vector2D(x, y);
    }

    add(v) {
        return new Vector2D(this.x + v.x, this.y + v.y);
    }

    sub(v) {
        return new Vector2D(this.x - v.x, this.y - v.y);
    }

    mul(s) {
        return new Vector2D(this.x * s, this.y * s);
    }

    div(s) {
        return new Vector2D(this.x / s, this.y / s);
    }

    dot(v) {
        return this.x * v.x + this.y * v.y;
    }

    cross(v) {
        return this.x * v.y - this.y * v.x;
    }

    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    magSq() {
        return this.x * this.x + this.y * this.y;
    }

    norm() {
        return this.div(this.mag());
    }

    dist(v) {
        return this.sub(v).mag();
    }

    distSq(v) {
        return this.sub(v).magSq();
    }

    angle() {
        return Math.atan2(this.y, this.x);
    }

    angleTo(v) {
        return Math.atan2(v.y - this.y, v.x - this.x);
    }

    rotate(a) {
        return new Vector2D(this.x * Math.cos(a) - this.y * Math.sin(a), this.x * Math.sin(a) + this.y * Math.cos(a));
    }

    rotateAround(v, a) {
        return this.sub(v).rotate(a).add(v);
    }

    lerp(v, t) {
        return this.add(v.sub(this).mul(t));
    }

    equals(v) {
        return this.x == v.x && this.y == v.y;
    }

    toString() {
        return "(" + this.x + ", " + this.y + ")";
    }
}