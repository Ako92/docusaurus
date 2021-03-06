/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {ComponentProps} from 'react';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

export default {
  code: (props: ComponentProps<typeof CodeBlock>): JSX.Element => {
    const {children} = props;
    if (typeof children === 'string') {
      if (!children.includes('\n')) {
        return <code {...props} />;
      }
      return <CodeBlock {...props} />;
    }
    return children;
  },
  a: (props: ComponentProps<'a'>): JSX.Element => {
    return <Link {...props} />;
  },
  pre: (props: ComponentProps<'div'>): JSX.Element => (
    <div className={styles.mdxCodeBlock} {...props} />
  ),
  h1: Heading('h1'),
  h2: Heading('h2'),
  h3: Heading('h3'),
  h4: Heading('h4'),
  h5: Heading('h5'),
  h6: Heading('h6'),
};
