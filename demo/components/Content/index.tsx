import React from 'react';
import cn from 'classnames';
// @ts-ignore
import Highlight, { defaultProps } from 'prism-react-renderer';
// @ts-ignore
import theme from 'prism-react-renderer/themes/duotoneLight';

import useStyles from '../../hooks/useStyles';
import contentCSS from './index.css';

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`;

const props = {
    ...defaultProps,
    theme,
};

const Content = () => {
    const styles = useStyles([contentCSS]);
    const codePrevieClass = cn(styles.preview, styles.code);

    return (
        <>
            <div className={styles.top_bar}>
                <svg className={styles.menu_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                    <path d="M0 382.5h459v-51H0v51zM0 255h459v-51H0v51zM0 76.5v51h459v-51H0z" />
                </svg>
                <span className={styles.title_component}>
                    Component: <b>Button</b>
                </span>
                <span className={styles.version_component}>
                    Version: <b>1.0.0</b>
                </span>
            </div>

            <div className={styles.content}>
                <p>Некоторое описание компонента</p>

                <div className={styles.preview} tabIndex={0}>
                    <div className={styles.title}>
                        <h2>Пример</h2>
                    </div>

                    <Highlight {...props} code={exampleCode} language="jsx">
                        {({ className, style, tokens, getLineProps, getTokenProps }) => (
                            <pre className={className} style={style}>
                                {tokens.map((line, i) => (
                                    <div {...getLineProps({ line, key: i })}>
                                        {line.map((token, key) => (
                                            <span {...getTokenProps({ token, key })} />
                                        ))}
                                    </div>
                                ))}
                            </pre>
                        )}
                    </Highlight>
                </div>

                <div className={codePrevieClass} tabIndex={0}>
                    <div className={styles.title}>
                        <div>
                            <h2>HTML</h2>
                        </div>
                        <div className={styles.copy_btn}>Copy</div>
                    </div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate pariatur deleniti dicta, totam
                    necessitatibus quas voluptas cum repudiandae blanditiis qui, possimus at nobis saepe fugiat. Dicta
                    cum, similique ipsa laborum repudiandae error optio ullam eligendi consequuntur? Molestias est,
                    accusantium illum obcaecati alias cupiditate facilis! Dolore officiis ullam ratione, assumenda
                    deleniti omnis unde nisi eius saepe, ex, optio rem quae vitae dignissimos. Quidem quae error
                    quibusdam cupiditate sequi suscipit, facere ut dolorum omnis, expedita mollitia nisi neque
                    temporibus nostrum blanditiis eveniet nihil illo voluptates, at alias adipisci? Fuga minus ratione
                    dolores minima, autem aspernatur nulla hic, reiciendis beatae magnam eaque id laborum a dignissimos
                    magni quo quaerat fugit, sunt sapiente expedita repudiandae. Molestias commodi doloremque, doloribus
                    ullam aliquam ad sed totam facilis vitae ratione, velit eos officiis. Iste provident ipsum ea quasi
                    consectetur voluptate facere corrupti. Excepturi odio rem alias nostrum velit ipsam illum voluptates
                    ad ut sapiente blanditiis, dolor deleniti quisquam iste nihil architecto, vel ea magnam error?
                    Sapiente repellat, distinctio itaque blanditiis magnam illum! Veniam rem, accusantium deserunt atque
                    harum ut eaque ab excepturi, totam similique esse magnam repellendus optio expedita saepe maxime
                    molestiae odit non neque praesentium, dignissimos consequuntur fugiat vitae. Cupiditate velit ea
                    dolores corporis? Reprehenderit, et!
                </div>

                <div className={codePrevieClass} tabIndex={0}>
                    <div className={styles.title}>
                        <div>
                            <h2>CSS</h2>
                        </div>
                        <div className={styles.copy_btn}>Copy</div>
                    </div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem amet officiis magnam ad
                    reiciendis, asperiores nulla perspiciatis obcaecati temporibus, animi fugiat facere et itaque
                    accusamus hic enim! Reiciendis tenetur recusandae hic porro unde accusamus excepturi delectus veniam
                    autem, eveniet aperiam aliquam. Nam sed voluptatibus, nesciunt quasi tempore facilis cum aliquid
                    officiis aliquam facere cumque nobis quidem, accusamus iusto quia ullam similique repudiandae. Ipsum
                    doloribus eveniet error quibusdam blanditiis commodi. Placeat qui, voluptas modi exercitationem eum,
                    quae fuga fugit dicta veniam amet sed eligendi totam facere nisi ab suscipit iste perspiciatis
                    incidunt obcaecati quasi! Odit ad possimus eum blanditiis corrupti, nisi ut impedit vel a pariatur.
                    Dolore ullam possimus similique molestiae magni praesentium. Nesciunt tempore quos, vel consequatur
                    at veniam molestiae a autem minus distinctio omnis perspiciatis nulla repellat ullam earum magni
                    culpa soluta officiis exercitationem ipsa voluptatum dolorem. Ad excepturi voluptatum quidem et
                    dignissimos qui soluta repellendus hic aut, numquam debitis illum nulla in at, praesentium dolor
                    itaque consequuntur labore nostrum! Ipsam, rerum. Dolores odit magnam, optio voluptatem itaque
                    cumque veritatis quis nostrum, harum earum nemo, ullam quae quidem laborum assumenda hic iste
                    aliquid magni quas tenetur ducimus ea expedita quos. Repellat iusto, eos amet architecto praesentium
                    magnam eum sit.
                </div>
            </div>
        </>
    );
};

export default Content;
