import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RegisterView.scss';
export default class RegisterFormView extends Component {
  render() {
    return (
      <div className="Register">
        <form name="Register__form">
          <div className="Register__form__form">
            <div className="Register__form__form__sns-login">
              <span className="Register__form__form__sns-login__title">
                SNS계정으로도 간편하게 가입하실 수 있습니다.
              </span>
              <button
                type="button"
                className="Register__form__form__sns-login__naver"
              >
                <span />
                네이버 아이디로 로그인
              </button>
            </div>
            <div className="Register__form__form__member-input">
              <span>회원정보 입력</span>
              <ul className="Register__form__form__member-input__list-group">
                <li>
                  <input
                    type="text"
                    placeholder="(필수)이메일 주소 입력"
                    name="email"
                  />
                </li>
                <li>
                  <input
                    type="password"
                    placeholder="(필수)비밀번호 입력"
                    name="password"
                  />
                </li>
                <li>
                  <input
                    type="password"
                    placeholder="(필수)비밀번호 재확인"
                    name="confirm-password"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="(선택)닉네임 입력"
                    name="nickName"
                  />
                </li>
              </ul>
            </div>
            <div className="Register__form__form__verification">
              <span>휴대폰 인증</span>
              <ul className="Register__form__form__verification__list-group">
                <li className="Register__form__form__verification__list-group-item">
                  <input
                    type="tel"
                    placeholder="(필수)휴대폰 전화번호 입력(-제외)"
                    name="phone"
                  />
                  <button>인증</button>
                </li>
                <li className="Register__form__form__verification__list-group-item">
                  <input
                    type="text"
                    placeholder="인증번호 입력"
                    name="smsVerification"
                  />
                  <button>확인</button>
                </li>
              </ul>
              <p className="Register__form__form__verification__text">
                인증번호가 도착하지 않았을 경우 '인증'버튼을 다시 눌러주세요.
              </p>
            </div>
            <div className="Register__form__form__terms">
              <span className="Register__form__form__terms__title">
                약관동의
              </span>
              <ul className="Register__form__form__terms__list-group">
                <li className="Register__form__form__terms__list-group__item">
                  <div className="checkbox">
                    <input type="checkbox" id="all" name="all" />
                    <label htmlFor="all">전체동의</label>
                  </div>
                </li>
                <li className="Register__form__form__terms__list-group__item">
                  <div className="checkbox">
                    <input type="checkbox" id="policy" name="policy" />
                    <label htmlFor="collect">이용약관동의(필수)</label>
                    <Link to="#">내용 보기 > </Link>
                  </div>
                </li>
                <li className="Register__form__form__terms__list-group__item">
                  <div className="checkbox">
                    <input type="checkbox" id="collect" name="collect" />
                    <label htmlFor="collect">
                      개인정보 수집 및 이용동의(필수)
                    </label>
                    <Link to="#">내용 보기 ></Link>
                  </div>
                </li>
                <li className="Register__form__form__terms__list-group__item">
                  <div className="checkbox">
                    <input type="checkbox" id="push" name="push" />
                    <label htmlFor="push">요기요 혜택알림 동의(선택)</label>
                  </div>
                </li>
              </ul>
              <div className="Register__form__form__terms__info">
                <div className="Register__form__form__terms__info__text">
                  만 14세미만의 어린이의 경우 회원가입이 불가능합니다.
                  <Link to="#">내용 보기 ></Link>
                </div>
              </div>
            </div>
            <button type="submit" className="Register__form__form__btn-join">
              회원가입 완료
            </button>
          </div>
        </form>
      </div>
    );
  }
}
