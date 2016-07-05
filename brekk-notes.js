import curry from 'lodash/fp/curry'
import map from 'lodash/fp/map'

if (src[`name`] && src[`name`] != null) {
	dest.name = src.name
}
if (src[`toad`] && src[`toad`] != null) {
	dest.toad = src.toad
}

copyProp(src)(dest)(`toad`)
map(copyProp(src)(dest))([`toad`, `name`, `farts`])
/*
_.map([1,3,4], (number) => {
	return number + 2
})
[3, 5, 6]
// vs.
//lodash/fp
// _.map(function, list)
const add2 = (x) => x + 2
const sum = curry((x, y) => x + y)
const add2 = sum(2)
sum(2)(20) // 40

// (3) => 5
add2ToAListOfShit = _.map(add2)
add2ToAListOfShit(list) // ([ 2, 3, 5]) => [4, 5, 7]


.then((someResult) => res.send(someResult))
.then(res.send) // bullshit
.then(res.send.bind(res))
*/

const copyProp = curry((src, dest, prop) => {
	if(src && src[prop] && src[prop] != null) {
		dest[prop] = src[prop]
	}
})

/*
copyProp = (src) => {
	(dest) => {
		(prop) => {

		}
	}
 */
}

const src = {
	a: `farts-${Math.random()}`.split(``),
	b: `farts-${Math.random()}`.split(``),
	c: `farts-${Math.random()}`.split(``)
}

const dest = {
	name: Math.random() * 10e3
}

const alphabet = `abcdefghijklmnopqrstuvwxyz`.split(``)
											 .map((letter) => {[letter]: Math.random()})


const aIndex = Math.floor(Math.random() * alphabet.length())
const bIndex = Math.floor(Math.random() * alphabet.length())

const copier = copyProp(alphabet[aIndex], alphabet[bIndex])
/*
const copyFromSource = copyProp(src)
const copySrcToDest = copyFromSource(dest)
 */

// copy single prop
copier(`a`)

const multicopy = map(copier)

multicopy([`a`, `b`, `c`])

/*
const sum = curry((a, b) => a + b)
const add5 = sum(5)
add5(2) // 10
const sum = (a) => {
	(b) => {
		return a + b
	}
}

//
 */


const renderer = (Component, props) => ReactDOM.render(<Component {...props} />, document.body)
const renderPage = renderer(Page)
describe(`Page`, () => {
	it(`should fucking work`, () => {
		const component = renderPage({className:`whatever`, someProp: 4})

	})
	it(`should fucking work`, () => {
		const component = renderPage({className:`whatever`, someProp: 2})

	})
})