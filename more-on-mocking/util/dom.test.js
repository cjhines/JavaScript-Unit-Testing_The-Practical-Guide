/**
 * @jest-environment jsdom
 */

import fs from 'fs';
import path from 'path';

import { showError } from './dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath, 'utf-8').toString();

document.body.innerHTML = htmlDocumentContent;

describe('showError', () => {
  it('should add error text to the id="errors" element', () => {
    showError('Test');

    const errorsElement = document.getElementById('errors');
    const errorMessageElement = errorsElement.querySelector('p');

    expect(errorMessageElement.textContent).not.toBeNull();
  });
});


