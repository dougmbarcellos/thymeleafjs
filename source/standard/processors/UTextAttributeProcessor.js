/* 
 * Copyright 2017, Emanuel Rabina (http://www.ultraq.net.nz/)
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

import ExpressionProcessor from '../expressions/ExpressionProcessor.js';
import AttributeProcessor  from '../../processors/AttributeProcessor.js';

/**
 * JS equivalent of Thymeleaf's `th:utext` attribute processor, applies the
 * expression in the attribute value to the text content of the element being
 * processed.
 * 
 * @author Emanuel Rabina
 */
export default class UTextAttributeProcessor extends AttributeProcessor {

	static NAME = 'utext';

	/**
	 * Constructor, set this processor to use the `utext` name and supplied
	 * prefix.
	 * 
	 * @param {String} prefix
	 */
	constructor(prefix) {

		super(prefix, UTextAttributeProcessor.NAME);
	}

	/**
	 * Processes an element that contains a `th:utext` or `data-th-utext`
	 * attribute on it, taking the text expression in the value and applying it to
	 * the text content of the element.
	 *
	 * @param {Element} element
	 *   Element being processed.
	 * @param {String} attribute
	 *   The attribute that was encountered to invoke this processor.
	 * @param {String} attributeValue
	 *   The value given by the attribute.
	 * @param {Object} context
	 */
	process(element, attribute, attributeValue, context) {

		element.innerHTML = new ExpressionProcessor().process(attributeValue, context);
		element.removeAttribute(attribute);
	}
}
