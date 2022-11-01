import React, { useEffect, useState } from "react";

export const Component2 = () => {
    const [show, setShow] = useState(false);
  const [item, setItem] = useState(0);
  const [i, setI] = useState(1);
  const [customerMail, setCustomerMail] = useState("");
  const [mails, setMails] = useState([]);
  const [apiRes, setApiRes] = useState([]);
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    )
      .then((res) => res.json())
      .then((data) => setApiRes(data))
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (loading) return <div>Loading ....</div>;
  const handleInput = (e) => {
    setCustomerMail(e.target.value);
  };
  const handleClick = () => {
    setMails((prev) => [...prev, { id: i, value: customerMail }]);
    setCustomerMail("");
    setI(i + 1);
    console.log(mails);
  };
  const handleCart = () => {
    setItem((prev) => prev + 1);
  };
  return (
    <>
      <div id="navbar">
        <div>
          <h3>Acciojob</h3>
        </div>
        <div>
          <div>
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
            <a href="">Pages</a>
          </div>
          <div>
            <span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.99969 6C6.79534 6 7.55841 5.68393 8.12102 5.12132C8.68362 4.55871 8.99969 3.79565 8.99969 3C8.99969 2.20435 8.68362 1.44129 8.12102 0.87868C7.55841 0.316071 6.79534 0 5.99969 0C5.20405 0 4.44098 0.316071 3.87837 0.87868C3.31577 1.44129 2.99969 2.20435 2.99969 3C2.99969 3.79565 3.31577 4.55871 3.87837 5.12132C4.44098 5.68393 5.20405 6 5.99969 6V6ZM7.99969 3C7.99969 3.53043 7.78898 4.03914 7.41391 4.41421C7.03884 4.78929 6.53013 5 5.99969 5C5.46926 5 4.96055 4.78929 4.58548 4.41421C4.21041 4.03914 3.99969 3.53043 3.99969 3C3.99969 2.46957 4.21041 1.96086 4.58548 1.58579C4.96055 1.21071 5.46926 1 5.99969 1C6.53013 1 7.03884 1.21071 7.41391 1.58579C7.78898 1.96086 7.99969 2.46957 7.99969 3V3ZM11.9997 11C11.9997 12 10.9997 12 10.9997 12H0.999695C0.999695 12 -0.000305176 12 -0.000305176 11C-0.000305176 10 0.999695 7 5.99969 7C10.9997 7 11.9997 10 11.9997 11ZM10.9997 10.996C10.9987 10.75 10.8457 10.01 10.1677 9.332C9.5157 8.68 8.28869 8 5.99969 8C3.70969 8 2.48369 8.68 1.83169 9.332C1.15369 10.01 1.00169 10.75 0.999695 10.996H10.9997Z"
                  fill="#23A6F0"
                />
              </svg>
              Login/Register
            </span>
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7426 10.3439C12.7109 9.02264 13.1446 7.38444 12.9569 5.7571C12.7692 4.12976 11.974 2.63329 10.7304 1.56708C9.48671 0.500869 7.88634 -0.0564485 6.24943 0.00662462C4.61252 0.0696978 3.05978 0.74851 1.90186 1.90726C0.743944 3.066 0.0662432 4.61922 0.00434136 6.25618C-0.0575605 7.89314 0.500902 9.49311 1.568 10.736C2.6351 11.9789 4.13214 12.773 5.75961 12.9595C7.38709 13.1461 9.02497 12.7112 10.3456 11.7419H10.3446C10.3746 11.7819 10.4066 11.8199 10.4426 11.8569L14.2926 15.7069C14.4801 15.8946 14.7345 16.0001 14.9997 16.0001C15.265 16.0002 15.5195 15.895 15.7071 15.7074C15.8947 15.5199 16.0002 15.2656 16.0003 15.0003C16.0004 14.735 15.8951 14.4806 15.7076 14.2929L11.8576 10.4429C11.8218 10.4068 11.7834 10.3733 11.7426 10.3429V10.3439ZM12.0006 6.49995C12.0006 7.22222 11.8583 7.93742 11.5819 8.60471C11.3055 9.272 10.9004 9.87831 10.3897 10.389C9.87896 10.8998 9.27264 11.3049 8.60535 11.5813C7.93806 11.8577 7.22286 11.9999 6.50059 11.9999C5.77832 11.9999 5.06312 11.8577 4.39583 11.5813C3.72854 11.3049 3.12223 10.8998 2.61151 10.389C2.10078 9.87831 1.69566 9.272 1.41926 8.60471C1.14285 7.93742 1.00059 7.22222 1.00059 6.49995C1.00059 5.04126 1.58006 3.64231 2.61151 2.61086C3.64296 1.57941 5.0419 0.999948 6.50059 0.999948C7.95928 0.999948 9.35823 1.57941 10.3897 2.61086C11.4211 3.64231 12.0006 5.04126 12.0006 6.49995V6.49995Z"
                  fill="#23A6F0"
                />
              </svg>
            </span>
            <span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.000305176 0.5C0.000305176 0.367392 0.0529836 0.240215 0.146752 0.146447C0.24052 0.0526784 0.367697 0 0.500305 0H2.00031C2.11184 3.08115e-05 2.22016 0.0373507 2.30804 0.106025C2.39592 0.174699 2.45831 0.270784 2.48531 0.379L2.89031 2H14.5003C14.5737 2.00007 14.6462 2.0163 14.7127 2.04755C14.7791 2.0788 14.8378 2.12429 14.8847 2.1808C14.9316 2.23731 14.9654 2.30345 14.9838 2.37452C15.0023 2.44558 15.0048 2.51984 14.9913 2.592L13.4913 10.592C13.4699 10.7066 13.409 10.8101 13.3194 10.8846C13.2297 10.9591 13.1169 10.9999 13.0003 11H4.00031C3.88374 10.9999 3.77087 10.9591 3.68122 10.8846C3.59156 10.8101 3.53075 10.7066 3.50931 10.592L2.01031 2.607L1.61031 1H0.500305C0.367697 1 0.24052 0.947322 0.146752 0.853553C0.0529836 0.759785 0.000305176 0.632608 0.000305176 0.5ZM3.10231 3L4.41531 10H12.5853L13.8983 3H3.10231ZM5.00031 11C4.46987 11 3.96116 11.2107 3.58609 11.5858C3.21102 11.9609 3.00031 12.4696 3.00031 13C3.00031 13.5304 3.21102 14.0391 3.58609 14.4142C3.96116 14.7893 4.46987 15 5.00031 15C5.53074 15 6.03945 14.7893 6.41452 14.4142C6.78959 14.0391 7.00031 13.5304 7.00031 13C7.00031 12.4696 6.78959 11.9609 6.41452 11.5858C6.03945 11.2107 5.53074 11 5.00031 11ZM12.0003 11C11.4699 11 10.9612 11.2107 10.5861 11.5858C10.211 11.9609 10.0003 12.4696 10.0003 13C10.0003 13.5304 10.211 14.0391 10.5861 14.4142C10.9612 14.7893 11.4699 15 12.0003 15C12.5307 15 13.0394 14.7893 13.4145 14.4142C13.7896 14.0391 14.0003 13.5304 14.0003 13C14.0003 12.4696 13.7896 11.9609 13.4145 11.5858C13.0394 11.2107 12.5307 11 12.0003 11ZM5.00031 12C5.26552 12 5.51988 12.1054 5.70741 12.2929C5.89495 12.4804 6.00031 12.7348 6.00031 13C6.00031 13.2652 5.89495 13.5196 5.70741 13.7071C5.51988 13.8946 5.26552 14 5.00031 14C4.73509 14 4.48073 13.8946 4.2932 13.7071C4.10566 13.5196 4.00031 13.2652 4.00031 13C4.00031 12.7348 4.10566 12.4804 4.2932 12.2929C4.48073 12.1054 4.73509 12 5.00031 12ZM12.0003 12C12.2655 12 12.5199 12.1054 12.7074 12.2929C12.8949 12.4804 13.0003 12.7348 13.0003 13C13.0003 13.2652 12.8949 13.5196 12.7074 13.7071C12.5199 13.8946 12.2655 14 12.0003 14C11.7351 14 11.4807 13.8946 11.2932 13.7071C11.1057 13.5196 11.0003 13.2652 11.0003 13C11.0003 12.7348 11.1057 12.4804 11.2932 12.2929C11.4807 12.1054 11.7351 12 12.0003 12Z"
                  fill="#23A6F0"
                />
              </svg>
              <span> {item}</span>
            </span>
            <span>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.0002 2.74805L7.2832 2.01105C5.6002 0.281049 2.5142 0.878049 1.4002 3.05305C0.8772 4.07605 0.7592 5.55305 1.7142 7.43805C2.6342 9.25305 4.5482 11.427 8.0002 13.795C11.4522 11.427 13.3652 9.25305 14.2862 7.43805C15.2412 5.55205 15.1242 4.07605 14.6002 3.05305C13.4862 0.878049 10.4002 0.280049 8.7172 2.01005L8.0002 2.74805ZM8.0002 15C-7.3328 4.86805 3.2792 -3.03995 7.8242 1.14305C7.8842 1.19805 7.9432 1.25505 8.0002 1.31405C8.05662 1.2551 8.11533 1.19839 8.1762 1.14405C12.7202 -3.04195 23.3332 4.86705 8.0002 15Z"
                  fill="#23A6F0"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div id="image-section">
        <div>
          <h5>SUMMER 2020</h5>
          <h1>NEW COLLECTION</h1>
          <h4>we know how large object will act, but things on small scale.</h4>
          <button>SHOP NOW</button>
        </div>
        <div>
          <img src="project\src\logo.svg" alt="" />
        </div>
      </div>
      <h2>Products</h2>
      <div id="parentdiv">
        {Object.values(apiRes).map((e) => (
          <div key={e.id}>
            <img alt="" src={e.productImage} />
            <div>
              <h6 id="vivek">{e.productName}</h6>
            </div>

            <div id="innerpricediv">
              <div>* * * * *</div>
              <div>
                <h6 className="heading">{e.newPrice}/- </h6>

                <h6>{e.oldPrice}/- </h6>
              </div>
            </div>
            <div id="cartbtn">
              <button id={e.id} onClick={handleCart}>
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* {Object.values(apiRes).map((e) => (
        <div key={e.id}>
          <h4>{e.productName}</h4>
          <img alt="" src={e.productImage} />
          <h4>New Price: {e.newPrice} </h4>
          <h4>Old Price: {e.oldPrice} </h4>
          <button id={e.id} onClick={handleCart}>
            Add to card
          </button>
        </div>
      ))} */}
      <div id="footer">
        <div>
          <div>
            <h3>AccioJob</h3>
            <div>
              <span>
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23 11.5704C23 5.1801 17.8515 0 11.5014 0C5.14848 0.00143732 0 5.1801 0 11.5719C0 17.3456 4.2056 22.1319 9.70191 23V14.9151H6.78415V11.5719H9.70479V9.02062C9.70479 6.12155 11.4224 4.52037 14.0484 4.52037C15.3075 4.52037 16.6226 4.74603 16.6226 4.74603V7.59193H15.1724C13.7451 7.59193 13.2995 8.4845 13.2995 9.40008V11.5704H16.4875L15.9787 14.9136H13.2981V22.9986C18.7944 22.1304 23 17.3441 23 11.5704Z"
                    fill="#23A6F0"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 0C8.01488 0 7.6395 0.01375 6.46663 0.066C5.29375 0.121 4.49487 0.30525 3.795 0.5775C3.06088 0.853626 2.39593 1.28676 1.84663 1.84663C1.2871 2.39621 0.854023 3.06108 0.5775 3.795C0.30525 4.4935 0.119625 5.29375 0.066 6.4625C0.01375 7.63812 0 8.01213 0 11.0014C0 13.9879 0.01375 14.3619 0.066 15.5347C0.121 16.7063 0.30525 17.5051 0.5775 18.205C0.859375 18.9282 1.23475 19.5415 1.84663 20.1534C2.45713 20.7652 3.07037 21.142 3.79363 21.4225C4.49487 21.6947 5.29238 21.8804 6.46388 21.934C7.63813 21.9862 8.01213 22 11 22C13.9879 22 14.3605 21.9862 15.5347 21.934C16.7049 21.879 17.5065 21.6947 18.2064 21.4225C18.94 21.1462 19.6045 20.7131 20.1534 20.1534C20.7652 19.5415 21.1406 18.9282 21.4225 18.205C21.6934 17.5051 21.879 16.7063 21.934 15.5347C21.9862 14.3619 22 13.9879 22 11C22 8.01213 21.9862 7.63813 21.934 6.46388C21.879 5.29375 21.6934 4.4935 21.4225 3.795C21.146 3.06106 20.7129 2.39618 20.1534 1.84663C19.6042 1.28655 18.9392 0.853387 18.205 0.5775C17.5037 0.30525 16.7035 0.119625 15.5334 0.066C14.3591 0.01375 13.9865 0 10.9973 0H11.0014H11ZM10.0141 1.98275H11.0014C13.9384 1.98275 14.2863 1.99238 15.4454 2.046C16.5179 2.09413 17.1009 2.27425 17.4886 2.42412C18.0015 2.6235 18.3686 2.86275 18.7536 3.24775C19.1386 3.63275 19.3765 3.9985 19.5759 4.51275C19.7271 4.89913 19.9059 5.48213 19.954 6.55463C20.0076 7.71375 20.0186 8.06163 20.0186 10.9973C20.0186 13.9329 20.0076 14.2821 19.954 15.4412C19.9059 16.5138 19.7257 17.0954 19.5759 17.4831C19.3995 17.9607 19.118 18.3926 18.7522 18.7467C18.3672 19.1318 18.0015 19.3696 17.4873 19.569C17.1023 19.7203 16.5192 19.899 15.4454 19.9485C14.2863 20.0007 13.9384 20.0131 11.0014 20.0131C8.06438 20.0131 7.71513 20.0007 6.556 19.9485C5.4835 19.899 4.90188 19.7203 4.51412 19.569C4.03631 19.3929 3.60405 19.1119 3.24913 18.7467C2.88303 18.392 2.60112 17.9598 2.42412 17.4818C2.27425 17.0954 2.09413 16.5124 2.046 15.4399C1.99375 14.2808 1.98275 13.9329 1.98275 10.9945C1.98275 8.0575 1.99375 7.711 2.046 6.55187C2.0955 5.47937 2.27425 4.89638 2.4255 4.50863C2.62488 3.99575 2.86412 3.62862 3.24913 3.24362C3.63412 2.85862 3.99988 2.62075 4.51412 2.42138C4.90188 2.27013 5.4835 2.09138 6.556 2.04188C7.57075 1.99513 7.964 1.98138 10.0141 1.98V1.98275ZM16.8726 3.80875C16.6993 3.80875 16.5276 3.84289 16.3675 3.90923C16.2073 3.97557 16.0618 4.0728 15.9392 4.19537C15.8167 4.31794 15.7194 4.46346 15.6531 4.62361C15.5868 4.78376 15.5526 4.95541 15.5526 5.12875C15.5526 5.30209 15.5868 5.47374 15.6531 5.63389C15.7194 5.79404 15.8167 5.93956 15.9392 6.06213C16.0618 6.1847 16.2073 6.28193 16.3675 6.34827C16.5276 6.41461 16.6993 6.44875 16.8726 6.44875C17.2227 6.44875 17.5585 6.30968 17.806 6.06213C18.0536 5.81458 18.1926 5.47884 18.1926 5.12875C18.1926 4.77866 18.0536 4.44292 17.806 4.19537C17.5585 3.94782 17.2227 3.80875 16.8726 3.80875ZM11.0014 5.3515C10.2521 5.33981 9.50798 5.47729 8.81234 5.75594C8.11671 6.0346 7.48346 6.44885 6.94946 6.97458C6.41546 7.50032 5.99138 8.12703 5.70191 8.81823C5.41244 9.50944 5.26336 10.2513 5.26336 11.0007C5.26336 11.7501 5.41244 12.4919 5.70191 13.1831C5.99138 13.8743 6.41546 14.5011 6.94946 15.0268C7.48346 15.5525 8.11671 15.9668 8.81234 16.2454C9.50798 16.5241 10.2521 16.6616 11.0014 16.6499C12.4844 16.6267 13.8988 16.0214 14.9393 14.9645C15.9799 13.9076 16.5631 12.4839 16.5631 11.0007C16.5631 9.51751 15.9799 8.09382 14.9393 7.03691C13.8988 5.97999 12.4844 5.37464 11.0014 5.3515ZM11.0014 7.33288C11.974 7.33288 12.9067 7.71923 13.5944 8.40695C14.2821 9.09467 14.6685 10.0274 14.6685 11C14.6685 11.9726 14.2821 12.9053 13.5944 13.593C12.9067 14.2808 11.974 14.6671 11.0014 14.6671C10.0288 14.6671 9.09605 14.2808 8.40833 13.593C7.72061 12.9053 7.33425 11.9726 7.33425 11C7.33425 10.0274 7.72061 9.09467 8.40833 8.40695C9.09605 7.71923 10.0288 7.33288 11.0014 7.33288Z"
                    fill="#23A6F0"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.91075 18C15.213 18 19.7546 11.0731 19.7546 5.07669C19.7546 4.88285 19.7546 4.68625 19.7464 4.49241C20.6306 3.84789 21.3937 3.04993 22 2.13592C21.1741 2.50262 20.2988 2.7443 19.4026 2.85312C20.3466 2.28495 21.0536 1.391 21.3923 0.337403C20.5054 0.86647 19.5346 1.23787 18.5226 1.43534C17.8423 0.705724 16.9419 0.222372 15.9611 0.0601592C14.9803 -0.102054 13.9737 0.0659244 13.0973 0.538075C12.2209 1.01023 11.5236 1.7602 11.1134 2.67182C10.7031 3.58345 10.6029 4.60585 10.8281 5.58066C9.03339 5.49005 7.27762 5.02057 5.67468 4.20269C4.07175 3.3848 2.65744 2.23678 1.5235 0.833069C0.947843 1.83421 0.772164 3.01843 1.03214 4.14526C1.29211 5.27209 1.96825 6.25705 2.92325 6.90013C2.20762 6.87565 1.50772 6.68215 0.88 6.33524V6.39754C0.881234 7.44631 1.24205 8.46247 1.90145 9.27429C2.56086 10.0861 3.4784 10.6438 4.499 10.853C4.11161 10.9605 3.71144 11.014 3.30963 11.0122C3.02635 11.0131 2.74365 10.9867 2.46537 10.9333C2.75383 11.8361 3.3155 12.6254 4.07171 13.1908C4.82793 13.7561 5.74081 14.0691 6.6825 14.0859C5.08276 15.3511 3.10668 16.0373 1.0725 16.034C0.714066 16.0355 0.355882 16.0147 0 15.9716C2.06458 17.297 4.46228 18.0008 6.91075 18Z"
                    fill="#23A6F0"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div>
            <div>
              <ul>
                Company Info
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <ul>
                Legal
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <ul>
                Features
                <li>Business Marketing</li>
                <li>User Analytic</li>
                <li>Live chat</li>
                <li>Unlimited Support</li>
              </ul>
            </div>
            <div>
              <ul>
                Resources
                <li>IOS & Androi</li>
                <li>Watch a demo</li>
                <li>Customers</li>
                <li>API</li>
              </ul>
            </div>
            <div>
              <label htmlFor="get">Get in touch</label>
              <br />
              <br />
              <input
                id="get"
                placeholder="Your Mail"
                type="email"
                value={customerMail}
                onChange={(e) => handleInput(e)}
              />
              <button onClick={handleClick}>Subscribe</button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <span>
              Made With{" "}
              <span>
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </span>{" "}
              at Acciojob
            </span>
          </div>
        </div>
        <div>
          <div>
            <button onClick={() => setShow(!show)}>Show Subscribed Customers</button>
            {show && (
              <table>
                <thead>
                  <tr>
                    <td>Sl No.</td>
                    <td>Email Id</td>
                  </tr>
                </thead>
                {mails.map((el) => {
                  return (
                    <tbody key={el.id}>
                      <tr>
                        <td>{el.id}</td>
                        <td>{el.value}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            )}
          </div>
        </div>
      </div>
         
    </>
  );
};