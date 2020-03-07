    console.log("Dress The Clown!")

    const BODY_PARTS = ["head", "body", "shoes"];
    let bodyPart = 0;
    let bodyImage = 0;

    document.addEventListener('keydown', keyPressHandler);

    function keyPressHandler(e) {
        let arrow = e.key;
        // console.log(`bodyPartSelector: ${bodyPartSelector(arrow)}`)
        // console.log(`bodyImageSelector: ${bodyImageSelector(arrow)}`);
        document.getElementById(`${BODY_PARTS[bodyPartSelector(arrow)]}`).src = `./images/${BODY_PARTS[bodyPartSelector(arrow)]}${bodyImageSelector(arrow)}.png`
    }

    function bodyPartSelector(e) {
        if (e === "ArrowDown") {
            if (bodyPart === 0) bodyPart = 3;
            bodyPart--
        }
        if (e === "ArrowUp") {
            if (bodyPart === 2) bodyPart = -1;
            bodyPart++
        }
        return bodyPart;
    }

    function bodyImageSelector(e) {
        if (e === 'ArrowLeft') {
            if (bodyImage === 0) bodyImage = 5
            bodyImage--;
        }
        if (e === 'ArrowRight') {
            if (bodyImage === 5) bodyImage = 0
            bodyImage++;
        }
        return bodyImage;
    }
    // console.log(`BodyPartSelector: ${bodyPartSelector(arrow)}`)
    // console.log(`Document.get: ${document.getElementById(BODY_PARTS[bodyPartSelector(arrow)])}`)
    // console.log(`Body_parts: ${BODY_PARTS[bodyPartSelector(arrow)]}`)