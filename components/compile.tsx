import {useMemo, useState, type FunctionComponent, type ReactNode} from 'react';
import Example from '../public/example.xml?type=raw';
import HyperXML from '../public/v1.xsl?type=raw';
import {Tabs} from "nextra/components";
import highlight from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import prettier from 'prettier/standalone';
import plugin from 'prettier/plugins/html';
import Editor from './editor';
import Lazy from './lazy';

highlight.registerLanguage('xml', xml);

function editor(code: string) {
    return highlight.highlight(code, {language: "xml", ignoreIllegals: true}).value;
}

const Compile = () => {
    const [xml, setXml] = useState(Example);

    const html = useMemo(async function () {
        if (typeof window === 'undefined') {
            return '';
        }

        const parser = new DOMParser();
        const html = parser.parseFromString(xml, 'application/xml');
        const xsl = parser.parseFromString(HyperXML, 'application/xml');

        const processor = new XSLTProcessor();
        processor.importStylesheet(xsl);

        const result = processor.transformToDocument(html);
        const prettified = await prettier.format(
            result.documentElement.outerHTML,
            {
                parser: 'html',
                tabWidth: 4,
                plugins: [plugin],
            }
        );

        return "<!DOCTYPE html>\n" + prettified.trim();
    }, [xml]);

    return (
        <>
            <Tabs items={['HyperXML', 'HTML', 'Result']}>
                <Tabs.Tab>
                    <Editor highlight={editor} onValueChange={setXml} value={xml} tabSize={4} padding={10} />
                </Tabs.Tab>
                <Tabs.Tab>
                    <Lazy promise={html}>
                        {html => html && <Editor highlight={editor} value={html} readOnly padding={10} />}
                    </Lazy>
                </Tabs.Tab>
                <Tabs.Tab>
                    <Lazy promise={html}>
                        {html => html && <iframe srcDoc={html} style={{height: '320px', width: '100%', border: 0}} />}
                    </Lazy>
                </Tabs.Tab>
            </Tabs>
        </>
    );
};

export default Compile;