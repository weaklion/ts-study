//react testing library 에서 추구하는 선언적 프로그래밍 
import React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render } from '@testing-library/react';
import ComplexForm, { ComplexFormProps } from './ComplexForm';

function renderComplexForm(props? : Partial<ComplexFormProps>) {
  //mock callback function
  const onSubmit = jest.fn();
  const onCancel = jest.fn();

  const result = render(<ComplexForm onSubmit={onSubmit} onCancel={onCancel} />);

  //dom 요소를 가져오기 위한 헬퍼 함수
  const Heading = () => result.getByText("Welcome, Zerry");

  const FirstNameInput = () => result.getByLabelText("First Name");

  const LastNameInput = () => result.getByLabelText("Last Name");

  const IsOver21Input = () => result.getByLabelText("Are you at least 21 years old?");

  const FavoriteDrinkInput = () => result.queryByLabelText("What's your favorite drink?");

  const CancelButton = () => result.getByText("Cancel");

  const SubmitButton = () => result.getByText("Apply");

  //dom 요소와 상호작용하기 위한 헬퍼 함수.

  function changeFirstName(name : string) {
    userEvent.type(FirstNameInput(), name);
  }

  function changeLastName(name : string) {
    userEvent.type(LastNameInput(), name);
  }

  function changeFavoriteDrinkInput(name : string) {
    userEvent.type(FavoriteDrinkInput() as HTMLElement, name);
  }

  async function clickIsOver21() {
    await act(async () => {
      userEvent.click(IsOver21Input());
    });
  }

  function clickSubmit() {
    userEvent.click(SubmitButton());
  }

  function clickCancel() {
    userEvent.click(CancelButton());
  }

  return {
    result,
    onSubmit,
    onCancel,
    changeFirstName,
    changeLastName,
    clickIsOver21,
    clickSubmit,
    clickCancel,
    FirstNameInput,
    LastNameInput,
    IsOver21Input,
    SubmitButton,
    CancelButton,
    Heading,
    FavoriteDrinkInput,
    changeFavoriteDrinkInput,
  };
}

describe("<ComplexForm />", () => {
  it("기본 필드를 렌더링해야 함.", async () => {
    const {
      FirstNameInput,
      LastNameInput,
      IsOver21Input,
      SubmitButton,
      Heading,
      FavoriteDrinkInput,
      CancelButton
    } = renderComplexForm();

    expect(Heading()).toBeInTheDocument();
    expect(FirstNameInput()).toBeInTheDocument();
    expect(LastNameInput()).toBeInTheDocument();
    expect(IsOver21Input()).toBeInTheDocument();
    expect(FavoriteDrinkInput()).not.toBeInTheDocument();
    expect(CancelButton()).toBeInTheDocument();
    expect(SubmitButton()).toBeInTheDocument();
  });

  it("21세 이상 체크 여부에 따라 좋아하는 음료 입력을 토글.", async () => {
    const { clickIsOver21, FavoriteDrinkInput } = renderComplexForm();

    expect(FavoriteDrinkInput()).not.toBeInTheDocument();

    await clickIsOver21();

    expect(FavoriteDrinkInput()).toBeInTheDocument();
  })

  it("취소 버튼이 클릭되면 onCancel 함수가 호출되어야 한다.", async () => {
    const { clickCancel, onCancel } = renderComplexForm();

    clickCancel();

    expect(onCancel).toHaveBeenCalled();
  });

  it("form 값으로 onSubmit을 호출해야 한다.", async () => {
    const {
      changeFirstName,
      changeLastName,
      clickIsOver21,
      changeFavoriteDrinkInput,
      clickSubmit,
      onSubmit
    } = renderComplexForm();

    changeFirstName('Zerry');
    changeLastName('Hogan');
    await clickIsOver21();
    changeFavoriteDrinkInput('Bourbon');
    clickSubmit();

    expect(onSubmit).toHaveBeenCalledWith({
      first_name : 'Zerry',
      last_name : 'Hogan',
      is_over_21 : true,
      favorite_drink : 'Bourbon'
    })
  })
})