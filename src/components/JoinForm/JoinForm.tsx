import React from 'react';
import { Form, Input, Button } from 'components/common';

export default function JoinForm(): React.ReactElement {
    return (
        <Form>
            <Input
                type="text"
                name="userId"
                placeholder="휴대폰 번호 또는 이메일 주소"
                onChange={(): void => console.log('onChange')}
            />
            <Input
                type="text"
                name="username"
                placeholder="성명"
                onChange={(): void => console.log('onChange')}
            />
            <Input
                type="text"
                name="nickname"
                placeholder="사용자 이름"
                onChange={(): void => console.log('onChange')}
            />
            <Input
                type="password"
                name="password"
                placeholder="비밀번호"
                onChange={(): void => console.log('onChange')}
            />
            <Button>가입</Button>
        </Form>
    );
}
