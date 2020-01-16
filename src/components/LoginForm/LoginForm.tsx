import React from 'react';
import { Form, Input, Button } from 'components/common';

export default function LoginForm(): React.ReactElement {
    return (
        <Form>
            <Input
                type="text"
                name="userid"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={(): void => console.log('onChange')}
            />
            <Input
                type="password"
                name="password"
                placeholder="비밀번호"
                onChange={(): void => console.log('onChange')}
            />
            <Button>로그인</Button>
        </Form>
    );
}
