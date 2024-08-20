import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  snumber: string;
  major: string;
  number: string;
  about: string;
  experience: string;
  additionalInfo: string;
  attendance: string;
  absence: string;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ContentBox = styled.div`
  width: 95%;
  height: 700px;
  border-radius: 20px;
  margin-top: 3.5vw;
  background-color: #292929;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 58px;
  }
  &::-webkit-scrollbar-thumb {
    background: #484848;
    border-radius: 40px;
    background-clip: content-box;
    border: 25px solid transparent;
  }
`;

const ApplyForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 3vw;
  margin-top: 3vw;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ApplyLabel = styled.label`
  display: flex;
  flex-direction: column;
  p:nth-child(1) {
    color: #d9d9d9;
    font-size: 1.1vw;
    font-weight: 400;
    margin-bottom: 1.1vw;
  }
  margin-bottom: 1.2vw;
`;

const InputBox1 = styled.input`
  width: 18vw;
  height: 36px;
  background: transparent;
  color: white;
  padding-left: 4.5px;
  font-size: 1vw;
  font-weight: 400;
  border: none;
  border-bottom: 0.5px solid white;
  outline: none;
  margin-bottom: 1.8vw;
  &::placeholder {
    color: #999999;
    font-size: 1.1vw;
    font-weight: 400;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const InputBox2 = styled.input`
  width: 24vw;
  height: 36px;
  background: transparent;
  color: white;
  padding-left: 4.5px;
  font-size: 1vw;
  font-weight: 400;
  border: none;
  border-bottom: 0.5px solid white;
  outline: none;
  margin-bottom: 1.8vw;
  &::placeholder {
    color: #999999;
    font-size: 1.1vw;
    font-weight: 400;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const InputBox3 = styled.textarea`
  width: 34vw;
  height: 180px;
  resize: none;
  background: transparent;
  color: white;
  padding-left: 4.5px;
  font-size: 1vw;
  font-weight: 400;
  border: none;
  border-bottom: 0.5px solid white;
  outline: none;
  margin-bottom: 1.8vw;
  &::placeholder {
    color: #999999;
    font-size: 1.1vw;
    font-weight: 400;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const YesLabel = styled.label`
  color: white;
  input {
    appearance: none;
    margin-right: 0.8vw;
    width: 1.1vw;
    height: 1.1vw;
    border: 2px solid #d9d9d9;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    background-color: transparent;
  }
  input:checked::before {
    content: "";
    display: block;
    width: 0.6vw;
    height: 0.6vw;
    background-color: #f6c015;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  span:nth-child(2) {
    font-weight: 400;
    font-size: 1.1vw;
  }
  margin-bottom: 1vw;
`;

const NoLabel = styled.label`
  color: white;
  input:nth-child(1) {
    appearance: none;
    margin-right: 0.8vw;
    width: 1.1vw;
    height: 1.1vw;
    border: 2px solid #d9d9d9;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    background-color: transparent;
  }
  input:nth-child(1):checked::before {
    content: "";
    display: block;
    width: 0.6vw;
    height: 0.6vw;
    background-color: #f6c015;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  input:nth-child(1) {
    margin-right: 0.8vw;
    accent-color: #f6c015;
  }
  span:nth-child(2) {
    font-weight: 400;
    margin-right: 0.8vw;
    font-size: 1.1vw;
  }
`;

const InputBox4 = styled.input`
  width: 24vw;
  height: 36px;
  background: transparent;
  color: white;
  padding-left: 4.5px;
  font-size: 1vw;
  font-weight: 400;
  border: none;
  border-bottom: 0.5px solid white;
  outline: none;
  margin-bottom: 1.8vw;
  &::placeholder {
    color: #999999;
    font-size: 1.1vw;
    font-weight: 400;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const Button = styled.button`
  width: 8.5vw;
  height: 3.2vw;
  background-color: #f6c015;
  border: none;
  border-radius: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  p:nth-child(1) {
    margin: 0;
    font-size: 1.1vw;
    color: black;
  }
  margin-top: 1.5vw;
  margin-bottom: 3vw;
`;

function Applying() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    snumber: "",
    major: "",
    number: "",
    about: "",
    experience: "",
    additionalInfo: "",
    attendance: "",
    absence: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange1 = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, attendance: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/api/conference-apply",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        navigate("/apply/success");
      } else {
        alert("Failed to submit application.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("An error occurred while submitting the application.");
    }
  };

  return (
    <Wrapper>
      <ContentBox>
        <ApplyForm onSubmit={handleSubmit}>
          <ApplyLabel>
            <p>이름</p>
            <InputBox1
              type="text"
              name="name"
              placeholder="이름을 입력하세요."
              value={formData.name}
              onChange={handleChange}
              required
            />
          </ApplyLabel>
          <ApplyLabel>
            <p>학번</p>
            <InputBox1
              type="text"
              name="snumber"
              placeholder="학번 8자리를 입력하세요."
              value={formData.snumber}
              onChange={handleChange}
              required
            />
          </ApplyLabel>
          <ApplyLabel>
            <p>학과</p>
            <InputBox2
              type="text"
              name="major"
              placeholder="소속 학과를 입력하세요."
              value={formData.major}
              onChange={handleChange}
              required
            />
          </ApplyLabel>
          <ApplyLabel>
            <p>연락처 (전화번호)</p>
            <InputBox2
              type="text"
              name="number"
              placeholder="연락처를 입력하세요."
              value={formData.number}
              onChange={handleChange}
              required
            />
          </ApplyLabel>
          <ApplyLabel>
            <p>간단하게 자기소개를 해주세요.</p>
            <InputBox3
              name="about"
              placeholder="내용을 입력하세요."
              value={formData.about}
              onChange={handleChange}
              required
            />
          </ApplyLabel>
          <ApplyLabel>
            <p>
              프로그래밍을 해 본 경험이나 프로젝트에 참여한 경험이 있다면 소개해
              주세요.
            </p>
            <InputBox3
              name="experience"
              placeholder="내용을 입력하세요."
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </ApplyLabel>
          <ApplyLabel>
            <p>릴리즈에서 어떠한 활동을 하고 싶은지 간단히 작성해 주세요.</p>
            <InputBox3
              name="additionalInfo"
              placeholder="내용을 입력하세요."
              value={formData.additionalInfo}
              onChange={handleChange}
              required
            />
          </ApplyLabel>
          <ApplyLabel>
            <p>개강총회가 있습니다. 참여 가능하신가요?</p>
            <YesLabel>
              <input
                type="radio"
                name="participation"
                value="yes"
                checked={formData.attendance === "yes"}
                onChange={handleChange1}
                required
              />
              <span>가능</span>
            </YesLabel>
            <NoLabel>
              <input
                type="radio"
                name="participation"
                value="no"
                checked={formData.attendance === "no"}
                onChange={handleChange1}
                required
              />
              <span>불가능</span>
              <InputBox4
                type="text"
                name="absence"
                placeholder="사유가 있다면 기재 바랍니다."
                value={formData.absence}
                onChange={handleChange}
              />
            </NoLabel>
          </ApplyLabel>
          <Button type="submit">
            <p>지원하기</p>
          </Button>
        </ApplyForm>
      </ContentBox>
    </Wrapper>
  );
}

export default Applying;
