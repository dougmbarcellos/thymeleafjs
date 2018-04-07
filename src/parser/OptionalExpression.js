/* 
 * Copyright 2018, Emanuel Rabina (http://www.ultraq.net.nz/)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Expression from './Expression';

/**
 * An optional expression doesn't need to be included to be matched.  Thus,
 * optional expressions "always" match.
 * 
 * @author Emanuel Rabina
 */
export default class OptionalExpression extends Expression {

	/**
	 * @param {String|RegExp} expression
	 */
	constructor(expression) {

		super();
		this.expression = expression;
	}

	/**
	 * Attempt to match the given expression.  If the expression isn't matched,
	 * then carry on as normal.
	 * 
	 * @param {Object} parsingContext
	 * @return {Object}
	 */
	parse(parsingContext) {

		let {input} = parsingContext;

		return this.markAndResetOnFailure(input, () => {
			let result = this.parseRegularExpressionOrString(parsingContext, this.expression);
			return result !== null ? result : '';
		});
	}
}
