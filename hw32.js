`use strict`;

(function () {
    const calculator = {
        a: null,
        b: null,

        read(a, b) {
            this.a = +prompt(`enter arg a`);
            this.b = +prompt(`enter arg b`);

            if (isNaN(this.a) || isNaN(this.b)) {
                errorText = `Enter number`;
                throw errorText;
            }
        },
        sum() {
            return this.a + this.b;
        },
        mult() {
            return this.a * this.b;
        },
    }

    calculator.read();
    console.log(calculator.sum());
    console.log(calculator.mult());
})();

/*
(function () {
    let calculator2 = {
        read2() {
            a2 = +prompt(`enter arg a`);
            b2 = +prompt(`enter arg b`);

            if (isNaN(a2) || isNaN(b2)) {
                errorText = `Enter number`;
                throw errorText;
            }
        },

        sum2() {
            return a2 + b2;
        },
        mult2() {
            return a2 * b2;
        },
    }

    calculator2.read2();
    console.log((calculator2.sum2()));
    console.log((calculator2.mult2()));
})();
*/