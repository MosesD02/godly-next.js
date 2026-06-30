import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const shieldSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="51"
    viewBox="0 0 50 51"
    fill="none"
  >
    <path
      d="M18.7487 23.0858H31.2487M24.9987 29.3358V16.8358M8.33203 23.6108C8.33203 39.6254 22.7445 45.2504 24.7633 45.9608C24.9202 46.0164 25.0772 46.0164 25.2341 45.9608C27.257 45.2733 41.6654 39.79 41.6654 23.6129V9.13581C41.6658 8.94962 41.6039 8.76866 41.4895 8.62177C41.3751 8.47488 41.2147 8.37054 41.0341 8.32539L25.2008 4.36081C25.0681 4.32765 24.9293 4.32765 24.7966 4.36081L8.96328 8.32539C8.78265 8.37054 8.62235 8.47488 8.50793 8.62177C8.39352 8.76866 8.3316 8.94962 8.33203 9.13581V23.6108Z"
      stroke="#1C1C1C"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const toolboxSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="51"
    viewBox="0 0 50 51"
    fill="none"
  >
    <path
      d="M11.3926 23.2549C11.6012 23.233 11.8044 23.3524 11.8828 23.5547L11.9072 23.6426C11.9441 23.8488 11.8402 24.0602 11.6445 24.1533L11.6289 24.1201L11.6357 24.1562L7.09961 25.8857L7.10059 25.8867C6.9183 25.9611 6.76834 26.0968 6.67578 26.2686L6.63965 26.3447C6.55318 26.5523 6.55325 26.7855 6.63965 26.9932V26.9941L6.67578 27.0693C6.7552 27.2169 6.87629 27.3377 7.02441 27.416L7.10059 27.4512L7.10156 27.4521L24.1367 34.7119L24.3037 34.7783C25.1423 35.0856 26.0695 35.0632 26.8955 34.7119L43.8945 27.4453L43.8965 27.4443L43.9726 27.4082C44.1451 27.3168 44.2817 27.1681 44.3574 26.9863L44.3857 26.9072C44.4343 26.7471 44.4345 26.5761 44.3857 26.416L44.3574 26.3369C44.2709 26.1293 44.1047 25.9647 43.8965 25.8799L43.8896 25.877L40.9853 24.7695V24.7686C40.8942 24.7392 40.8147 24.6839 40.7568 24.6094L40.7051 24.5264C40.6474 24.408 40.6419 24.2712 40.6894 24.1484L40.7334 24.0615C40.7863 23.9799 40.8634 23.9155 40.9551 23.8789L41.0498 23.8525C41.1421 23.8366 41.2376 23.8488 41.3242 23.8877H41.3252L44.2393 25.0137L44.4033 25.085C44.7751 25.271 45.0723 25.5819 45.2412 25.9658L45.3047 26.1328C45.4151 26.4717 45.422 26.8359 45.3242 27.1787L45.2666 27.3486C45.1117 27.7386 44.8259 28.0602 44.4609 28.2598L44.2998 28.3369L27.2578 35.583C26.1448 36.0538 24.8884 36.0537 23.7754 35.583H23.7744L6.73437 28.3379L6.57129 28.2627C6.25427 28.096 5.99421 27.8382 5.8252 27.5225L5.74805 27.3594C5.56467 26.9143 5.56847 26.4141 5.75781 25.9717L5.83691 25.8096C6.03906 25.4442 6.36397 25.1592 6.75684 25.0068H6.75781L11.2959 23.2754L11.3037 23.2725L11.3926 23.2549Z"
      fill="#1C1C1C"
      stroke="#1C1C1C"
      strokeWidth="0.234375"
    />
    <path
      d="M43.9658 30.0615C44.0582 30.0455 44.1535 30.0587 44.2402 30.0977L44.2412 30.0967C44.6896 30.2662 45.0509 30.6086 45.2451 31.0469L45.3096 31.2139C45.4207 31.5525 45.4279 31.9168 45.331 32.2598L45.2744 32.4297C45.1205 32.82 44.8351 33.1424 44.4707 33.3428L44.3096 33.4209L27.2666 40.667C26.223 41.1083 25.0534 41.1354 23.9941 40.749L23.7842 40.667L6.70605 33.4277C6.31962 33.264 6.00459 32.971 5.81348 32.6016L5.73926 32.4395C5.56239 31.9938 5.57153 31.4954 5.76465 31.0566L5.84473 30.8965C6.04919 30.5345 6.37466 30.2529 6.7666 30.1035V30.1055C6.8837 30.0523 7.01694 30.0479 7.13672 30.0957L7.22363 30.1406C7.30463 30.1943 7.36768 30.2723 7.40332 30.3643L7.42871 30.459C7.43907 30.5226 7.43659 30.5878 7.4209 30.6504L7.3877 30.7422C7.33161 30.8577 7.22988 30.9437 7.1084 30.9834L7.10937 30.9844C6.92706 31.0588 6.7771 31.1943 6.68457 31.3662L6.64844 31.4424C6.56208 31.65 6.56198 31.8842 6.64844 32.0918L6.68457 32.167C6.7639 32.3144 6.88527 32.4354 7.0332 32.5137L7.10937 32.5488L7.11133 32.5498L24.1465 39.7949L24.3135 39.8613C25.152 40.1686 26.0784 40.1461 26.9043 39.7949L43.8975 32.542H43.8994L43.9746 32.5059C44.1473 32.4145 44.2836 32.266 44.3594 32.084L44.3887 32.0049C44.4373 31.8449 44.4373 31.6737 44.3887 31.5137L44.3594 31.4346C44.2729 31.227 44.1075 31.0626 43.8994 30.9775V30.9766C43.8092 30.9469 43.7303 30.8923 43.6728 30.8184L43.6211 30.7354C43.5635 30.617 43.558 30.4801 43.6055 30.3574L43.6494 30.2705C43.7023 30.1889 43.7802 30.1246 43.8721 30.0879L43.9658 30.0615Z"
      fill="#1C1C1C"
      stroke="#1C1C1C"
      strokeWidth="0.234375"
    />
    <path
      d="M43.6953 35.3809C43.8069 35.2038 44.0262 35.1179 44.2334 35.1807L44.2266 35.2217L44.2412 35.1836C44.6897 35.3534 45.051 35.6955 45.2451 36.1338L45.3096 36.3008C45.4206 36.6395 45.428 37.0037 45.331 37.3467L45.2744 37.5156C45.1205 37.9059 44.835 38.2283 44.4707 38.4287L44.3096 38.5068L27.2666 45.7529C26.223 46.1941 25.0535 46.2221 23.9941 45.8359L23.7842 45.7529L6.70605 38.5146C6.31967 38.351 6.00462 38.0577 5.81348 37.6885L5.73926 37.5254C5.56258 37.08 5.57176 36.5822 5.76465 36.1436L5.84473 35.9834C6.04914 35.6214 6.37456 35.3397 6.7666 35.1904L6.77441 35.1875V35.1885C7.01154 35.1163 7.26389 35.2388 7.35352 35.4697L7.37891 35.5576C7.41593 35.7639 7.31097 35.9753 7.11523 36.0684L7.10937 36.0713C6.92698 36.1458 6.77706 36.2811 6.68457 36.4531L6.64844 36.5283C6.56195 36.736 6.562 36.97 6.64844 37.1777L6.68457 37.2539C6.77711 37.4258 6.92705 37.5613 7.10937 37.6357H7.11133L24.1465 44.8818L24.3135 44.9482C25.1519 45.2554 26.0785 45.233 26.9043 44.8818L43.8975 37.6289L43.8994 37.6279L43.9746 37.5928C44.1472 37.5015 44.2836 37.3527 44.3594 37.1709L44.3887 37.0918C44.4373 36.9318 44.4372 36.7606 44.3887 36.6006L44.3594 36.5215C44.2729 36.3139 44.1075 36.1494 43.8994 36.0645L43.8926 36.0615C43.6689 35.955 43.5652 35.6939 43.6543 35.4629L43.6953 35.3809Z"
      fill="#1C1C1C"
      stroke="#1C1C1C"
      strokeWidth="0.234375"
    />
    <path
      d="M39.7734 6.34961C40.3456 6.23668 40.9428 6.32974 41.4561 6.61816L41.668 6.75195C42.1447 7.08795 42.489 7.58489 42.6348 8.15527L42.6846 8.40137C42.7704 8.9781 42.6489 9.57032 42.3369 10.0693L42.3359 10.0684L37.3506 18.4736C37.2433 18.657 37.2138 18.8759 37.2686 19.0811L37.293 19.1562C37.3577 19.328 37.48 19.4732 37.6406 19.5654L38.6025 20.085L38.6035 20.0859L38.7978 20.2061C39.236 20.5067 39.5652 20.9452 39.7295 21.4551L39.7891 21.6758C39.9032 22.194 39.8423 22.7377 39.6143 23.2217L39.6152 23.2227L36.6582 29.5713L36.6572 29.5703C36.6026 29.6911 36.5008 29.7836 36.375 29.8252L36.3564 29.8311H36.2314C36.1523 29.8313 36.0738 29.8122 36.0039 29.7744L36.0029 29.7734L24.6025 23.3613V23.3603C24.5173 23.3119 24.4494 23.2388 24.4082 23.1514L24.376 23.0596C24.3455 22.9322 24.3692 22.7977 24.4414 22.6885L28.3174 16.8457L28.3184 16.8447L28.4531 16.665C28.7865 16.262 29.2438 15.9766 29.7568 15.8555L29.9775 15.8135C30.4956 15.741 31.026 15.8388 31.4863 16.0957L32.4268 16.623L32.4277 16.624L32.5 16.6602C32.672 16.7356 32.8667 16.748 33.0479 16.6924L33.0498 16.6914L33.125 16.666C33.2965 16.5978 33.4391 16.4707 33.5273 16.3066L38.0508 7.6582C38.3527 7.05771 38.8877 6.60672 39.5303 6.41016L39.7734 6.34961ZM35.0469 28.1387L36 28.6728L38.5576 23.1797L37.4131 22.542L35.0469 28.1387ZM33.3516 27.2051L34.1934 27.6797L36.5596 22.084L35.71 21.6074L33.3516 27.2051ZM31.0469 25.8926L32.54 26.7324L34.8994 21.1367L34.0029 20.6328L31.0469 25.8926ZM28.8359 24.6523L30.2217 25.4287L33.1514 20.1738L32.3809 19.7227L28.8359 24.6523ZM27.1611 23.7119L28.0029 24.1807L31.5557 19.2568L30.707 18.7812L27.1611 23.7119ZM25.4834 22.8193L26.2998 23.2764L29.8477 18.3428L28.8428 17.751L25.4834 22.8193ZM40.0361 7.37402C39.5757 7.44173 39.1665 7.71806 38.9346 8.12988L38.9355 8.13086L34.3613 16.7451C34.169 17.1081 33.8551 17.3896 33.4775 17.542L33.3125 17.5986C32.8629 17.7292 32.3798 17.6725 31.9727 17.4414V17.4424L31.0684 16.9648L30.9648 16.9131C30.7596 16.8201 30.5356 16.7759 30.3105 16.7842L30.1982 16.793C29.954 16.8208 29.7218 16.9098 29.5225 17.0508L38.9062 22.3145C38.9197 22.1084 38.8919 21.9017 38.8193 21.708L38.7754 21.6045C38.6638 21.3647 38.4894 21.1602 38.2715 21.0127L38.1758 20.9531L37.2353 20.4258C36.8783 20.2243 36.6055 19.9044 36.4619 19.5244L36.4082 19.3574C36.2875 18.9048 36.3545 18.4223 36.5937 18.0195L41.5791 9.61523C41.8108 9.2016 41.8339 8.70734 41.6504 8.27832L41.5596 8.09863C41.2827 7.63359 40.7785 7.35148 40.2373 7.3584L40.0361 7.37402Z"
      fill="#1C1C1C"
      stroke="#1C1C1C"
      strokeWidth="0.234375"
    />
    <path
      d="M25.5078 5.6875C22.8576 5.6875 20.6534 5.81907 19.0215 6.00195C18.2055 6.0934 17.5336 6.19714 17.0215 6.30371C16.6903 6.37263 16.4314 6.44352 16.2441 6.50879C16.4321 6.57269 16.6918 6.64251 17.0234 6.71094C17.5367 6.81684 18.2097 6.92134 19.0264 7.01367C20.6601 7.19835 22.8647 7.33389 25.5078 7.33398L26.4785 7.32812C28.6945 7.30042 30.5652 7.17959 31.9971 7.01953C32.8153 6.92807 33.4888 6.82335 34.001 6.7168C34.3339 6.64754 34.5923 6.57601 34.7773 6.51074C34.5896 6.44489 34.3288 6.37335 33.9941 6.30371C33.482 6.19715 32.8101 6.09341 31.9941 6.00195C30.3622 5.81904 28.1581 5.6875 25.5078 5.6875ZM33.9609 14.8887C33.9609 15.15 33.7489 15.3623 33.4873 15.3623C33.226 15.3622 33.0137 15.15 33.0137 14.8887V13.7217C26.5322 14.7462 20.9074 14.7423 15.9707 13.7275V21.5674C18.5936 22.0979 21.2636 22.3599 23.9395 22.3457H23.9404L24.0361 22.3555C24.2517 22.3998 24.4141 22.5908 24.4141 22.8193C24.414 23.048 24.2517 23.2389 24.0361 23.2832L23.9404 23.293H23.8408C21.1959 23.3043 18.557 23.0452 15.9639 22.5254V23.9531C15.9597 24.2872 16.0563 24.6155 16.2402 24.8945L16.3125 24.9961C16.49 25.2257 16.7249 25.4058 16.9941 25.5176H16.9951C21.0687 27.188 25.5514 27.5929 29.8584 26.6797H29.8594L29.9561 26.6709C30.1796 26.6718 30.3792 26.829 30.4248 27.0566L30.4346 27.1533C30.4337 27.377 30.2755 27.5755 30.0478 27.6211L30.0488 27.6221C28.674 27.907 27.2768 28.0693 25.874 28.1074L25.2725 28.1162C22.3124 28.1139 19.3811 27.5352 16.6426 26.4121L16.6084 26.3975L16.6064 26.3955C16.1946 26.2251 15.833 25.9541 15.5566 25.6064L15.4404 25.4473C15.1453 25.0124 14.9875 24.4983 14.9883 23.9727V6.36816C14.9883 6.12253 15.1756 5.92165 15.416 5.89844C15.8553 5.6195 16.6049 5.41211 17.4883 5.25586C18.3944 5.09561 19.4604 4.98544 20.5195 4.90918C22.6388 4.7566 24.7411 4.74023 25.501 4.74023C26.261 4.74024 28.3621 4.75451 30.4775 4.90527C31.5351 4.98064 32.5986 5.0904 33.501 5.25C34.3797 5.40544 35.1237 5.61254 35.5566 5.8916C35.7972 5.91479 35.9842 6.11509 35.9844 6.36035V11.1133C35.9842 11.3745 35.772 11.5859 35.5107 11.5859C35.2496 11.5858 35.0373 11.3744 35.0371 11.1133V7.37988C34.5085 7.57839 33.7877 7.73342 32.9805 7.85254C32.0841 7.98479 31.0725 8.0763 30.084 8.13965C28.1071 8.26633 26.2147 8.28027 25.501 8.28027C24.7875 8.28027 22.8962 8.2684 20.9199 8.14258C19.9319 8.07967 18.921 7.98803 18.0244 7.85547C17.2163 7.73598 16.4942 7.58004 15.9639 7.37988V12.7686C20.989 13.8279 26.6942 13.8105 33.4043 12.6934L33.5078 12.6875C33.6103 12.6927 33.7095 12.7302 33.79 12.7969L33.8623 12.8711C33.925 12.9522 33.9602 13.0526 33.9609 13.1572V14.8887Z"
      fill="#1C1C1C"
      stroke="#1C1C1C"
      strokeWidth="0.234375"
    />
  </svg>
);

const leafSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="51"
    viewBox="0 0 50 51"
    fill="none"
  >
    <path
      d="M27.082 45.1066C23.5802 45.5402 20.0304 44.8695 16.9281 43.1883C13.8258 41.507 11.3259 38.8991 9.77735 35.7285C8.22876 32.5579 7.7088 28.983 8.29004 25.5026C8.87128 22.0222 10.5247 18.8102 13.0195 16.3149L24.1154 5.21908C24.3497 4.985 24.6674 4.85352 24.9987 4.85352C25.3299 4.85352 25.6477 4.985 25.882 5.21908L36.9779 16.3149C39.1848 18.5201 40.7398 21.2919 41.4714 24.3248C42.2029 27.3576 42.0826 30.5336 41.1237 33.5024M33.332 41.8357L37.4987 46.0024L45.832 37.6691"
      stroke="#1C1C1C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const badgeSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="51"
    viewBox="0 0 50 51"
    fill="none"
  >
    <path
      d="M24.1822 5.04856C24.4096 4.85098 24.7008 4.74219 25.002 4.74219C25.3033 4.74219 25.5944 4.85098 25.8218 5.04856L29.8801 8.57356C30.0065 8.68345 30.1538 8.76683 30.313 8.81872C30.4723 8.87061 30.6403 8.88997 30.8072 8.87564L36.1656 8.40897C36.4656 8.38321 36.7648 8.4666 37.0082 8.64381C37.2516 8.82102 37.4229 9.08015 37.4906 9.37356L38.7031 14.6111C38.7405 14.7747 38.8105 14.9292 38.9089 15.0652C39.0074 15.2012 39.1322 15.316 39.276 15.4027L43.8843 18.1736C44.1422 18.3288 44.3354 18.5719 44.4284 18.8582C44.5214 19.1445 44.5079 19.4547 44.3906 19.7319L42.2906 24.6819C42.2252 24.8361 42.1916 25.0019 42.1916 25.1694C42.1916 25.3369 42.2252 25.5027 42.2906 25.6569L44.3906 30.6069C44.5085 30.8843 44.5222 31.195 44.4292 31.4818C44.3362 31.7685 44.1427 32.012 43.8843 32.1673L39.276 34.9381C39.1324 35.0246 39.0077 35.1391 38.9093 35.2747C38.8109 35.4104 38.7407 35.5644 38.7031 35.7277L37.4906 40.9652C37.4229 41.2586 37.2516 41.5178 37.0082 41.695C36.7648 41.8722 36.4656 41.9556 36.1656 41.9298L30.8072 41.4631C30.6405 41.4485 30.4725 41.4675 30.3132 41.5191C30.154 41.5706 30.0067 41.6536 29.8801 41.7631L25.8197 45.2902C25.5923 45.4878 25.3012 45.5966 24.9999 45.5966C24.6987 45.5966 24.4076 45.4878 24.1801 45.2902L20.1218 41.7631C19.9952 41.6536 19.848 41.5706 19.6887 41.5191C19.5294 41.4675 19.3615 41.4485 19.1947 41.4631L13.8364 41.9298C13.5364 41.9556 13.2372 41.8722 12.9937 41.695C12.7503 41.5178 12.579 41.2586 12.5114 40.9652L11.2989 35.7277C11.2615 35.5641 11.1914 35.4096 11.093 35.2736C10.9946 35.1376 10.8697 35.0228 10.726 34.9361L6.11764 32.1652C5.85977 32.01 5.66659 31.7668 5.57358 31.4806C5.48058 31.1943 5.49401 30.8841 5.61139 30.6069L7.71139 25.6569C7.77671 25.5027 7.81037 25.3369 7.81037 25.1694C7.81037 25.0019 7.77671 24.8361 7.71139 24.6819L5.61139 19.7319C5.49343 19.4545 5.4797 19.1438 5.57273 18.857C5.66576 18.5703 5.85928 18.3268 6.11764 18.1715L10.726 15.4006C10.8695 15.3142 10.9942 15.1997 11.0926 15.064C11.1911 14.9284 11.2612 14.7744 11.2989 14.6111L12.5114 9.37356C12.579 9.08015 12.7503 8.82102 12.9937 8.64381C13.2372 8.4666 13.5364 8.38321 13.8364 8.40897L19.1947 8.87564C19.3616 8.88997 19.5297 8.87061 19.6889 8.81872C19.8482 8.76683 19.9954 8.68345 20.1218 8.57356L24.1822 5.04856Z"
      stroke="#1C1C1C"
      strokeWidth="1.5"
    />
    <path
      d="M18.75 27.252L22.9167 31.4186L33.3333 21.002"
      stroke="#1C1C1C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const chooseUsData = {
  "solar-panel-cleaning": [
    {
      name: "Trained Professionals",
      svg: shieldSvg,
      description:
        "Skilled in safely cleaning delicate solar panels without damage.",
    },
    {
      name: "Fully Insured & Equipped",
      svg: toolboxSvg,
      description: "Industry-grade tools ensure a thorough and safe clean.",
    },
    {
      name: "Eco-Friendly Cleaning Solutions",
      svg: leafSvg,
      description:
        "Non-abrasive and safe for your panels and surrounding areas.",
    },
    {
      name: "Satisfaction Guarantee",
      svg: badgeSvg,
      description: "If you're not happy, we'll make it right.",
    },
  ],
  "pressure-washing": [
    {
      name: "Trained Professionals",
      svg: shieldSvg,
      description:
        "Experienced in matching the right pressure and technique to every surface — from delicate pavers to heavy-duty concrete.",
    },
    {
      name: "Fully Insured & Equipped",
      svg: toolboxSvg,
      description:
        "Commercial-grade equipment and full insurance coverage on every job, no exceptions.",
    },
    {
      name: "Eco-Friendly Cleaning Solutions",
      svg: leafSvg,
      description:
        "Biodegradable detergents that are tough on grime but safe for your landscaping, pets, and family.",
    },
    {
      name: "Satisfaction Guarantee",
      svg: badgeSvg,
      description: "If you're not happy, we'll make it right.",
    },
  ],
  "gutter-cleaning": [
    {
      name: "We Clear It All the Way Through",
      svg: shieldSvg,
      description:
        "Every clog cleared, every downspout flushed, every section checked — we don't leave until water flows freely.",
    },
    {
      name: "Fully Insured & Equipped",
      svg: toolboxSvg,
      description:
        "The right tools for single-story homes to multi-story buildings, with full insurance on every job.",
    },
    {
      name: "We Bag and Remove the Debris",
      svg: leafSvg,
      description:
        "Everything we pull out gets bagged and removed. We don't blow it into your yard or leave it on your roof.",
    },
    {
      name: "Satisfaction Guarantee",
      svg: badgeSvg,
      description:
        "If it's not flowing right when we leave, we come back and fix it — no questions asked.",
    },
  ],
  "house-washing": [
    {
      name: "Soft Wash Specialists",
      svg: shieldSvg,
      description:
        "We know the difference between what needs soft washing and what needs pressure. Your home's exterior gets the right treatment every time.",
    },
    {
      name: "Fully Insured & Equipped",
      svg: toolboxSvg,
      description:
        "Commercial-grade soft wash systems and full insurance on every job, residential or commercial.",
    },
    {
      name: "Surface-Safe Chemistry",
      svg: leafSvg,
      description:
        "Custom low-pressure treatments lift mold, algae, and pollen without damaging your stucco, paint, or siding.",
    },
    {
      name: "Satisfaction Guarantee",
      svg: badgeSvg,
      description:
        "Not happy with the result? We come back and make it right — no questions asked.",
    },
  ],
  "roof-cleaning": [
    {
      name: "Soft Wash Only",
      svg: shieldSvg,
      description:
        "We never use high pressure on roofs — it cracks tiles, lifts shingles, and voids warranties. Soft washing is the right way.",
    },
    {
      name: "Fully Insured & Equipped",
      svg: toolboxSvg,
      description:
        "Professional soft wash equipment and full insurance on every job, residential or commercial.",
    },
    {
      name: "Landscaping Protected",
      svg: leafSvg,
      description:
        "We pre-wet and cover your plants before every treatment so nothing around your roof gets harmed.",
    },
    {
      name: "Satisfaction Guarantee",
      svg: badgeSvg,
      description:
        "Not happy with the result? We come back and make it right — no questions asked.",
    },
  ],
  "paver-sealing": [
    {
      name: "Surface Restoration Specialists",
      svg: shieldSvg,
      description:
        "We clean first, then seal. Proper prep is what makes a seal last, and we never skip it.",
    },
    {
      name: "Fully Insured & Equipped",
      svg: toolboxSvg,
      description:
        "Commercial-grade equipment and full insurance on every job, residential or commercial.",
    },
    {
      name: "Right Product for Every Surface",
      svg: leafSvg,
      description:
        "Travertine, concrete, and brick pavers each need different sealers. We remove prior sand, clean the joints, re-sand where needed, and give you the finish you want.",
    },
    {
      name: "2-Year Unconditional Warranty",
      svg: badgeSvg,
      description:
        "The only company in South Florida offering a 2-year unconditional warranty on all surface restoration work.",
    },
  ],
  "travertine-sealing": [
    {
      name: "We Know Travertine",
      svg: shieldSvg,
      description:
        "We use the right penetrating sealer for this stone, re-sand joints if needed, and give you the finish you want. No generic coatings, no guessing.",
    },
    {
      name: "Travertine and Natural Stone Specialists",
      svg: toolboxSvg,
      description:
        "We work with travertine, marble, and stone surfaces regularly. The right product, the right prep, and the right finish every time.",
    },
    {
      name: "Gloss, Matte, or Natural",
      svg: leafSvg,
      description:
        "We cater to what you want — a wet look that deepens the color, a natural matte, or anything in between. Your call.",
    },
    {
      name: "2-Year Unconditional Warranty",
      svg: badgeSvg,
      description:
        "The only company in South Florida backing every surface restoration job with a 2-year unconditional warranty.",
    },
  ],
  "concrete-sealing": [
    {
      name: "Pressure Wash First, Always",
      svg: shieldSvg,
      description:
        "We don't seal dirty concrete. Every job starts with a full wash so the sealer bonds to a clean surface.",
    },
    {
      name: "Right Sealer for the Surface",
      svg: toolboxSvg,
      description:
        "Driveways, pool decks, and commercial concrete each need different products. We match the sealer, prep the surface, and deliver the finish you're looking for.",
    },
    {
      name: "Fully Insured & Equipped",
      svg: leafSvg,
      description:
        "Professional-grade equipment and full insurance on every job, residential or commercial.",
    },
    {
      name: "2-Year Unconditional Warranty",
      svg: badgeSvg,
      description:
        "The only company in South Florida offering a 2-year unconditional warranty on all surface restoration work.",
    },
  ],
  "screen-cleaning": [
    {
      name: "Screen Specialists",
      svg: shieldSvg,
      description:
        "Window screens, door screens, pool enclosures, and lanais — we handle every type, every size, every material.",
    },
    {
      name: "Fully Insured & Equipped",
      svg: toolboxSvg,
      description:
        "The right tools for every screen type and property size, with full insurance on every job.",
    },
    {
      name: "Removal & Reinstallation Included",
      svg: leafSvg,
      description:
        "Screens come off, get cleaned properly, and go right back where they belong — no damage, no guesswork.",
    },
    {
      name: "Satisfaction Guarantee",
      svg: badgeSvg,
      description:
        "If they don't look right when we're done, we come back and make it right — no questions asked.",
    },
  ],
  // Why Choose Us — SHARED for window cleaning (consolidated interior + exterior)
  "window-cleaning": [
    {
      name: "Interior & Exterior Specialists",
      svg: shieldSvg,
      description:
        "We specialize in interior window cleaning and exterior window cleaning — hard-to-reach windows, high panes, residential and commercial.",
    },
    {
      name: "Fully Insured & Equipped",
      svg: toolboxSvg,
      description:
        "Water-fed poles, purified water systems, and full insurance on every job — homes and businesses.",
    },
    {
      name: "Purified Water & Smart Finishes",
      svg: leafSvg,
      description:
        "Zero-TDS rinses plus optional RainShield help your windows stay cleaner longer without harsh residue.",
    },
    {
      name: "7-Day Sparkle Guarantee",
      svg: badgeSvg,
      description:
        "Storm, pet, or bird mess within a week? We come back and make it right — your satisfaction stays the standard.",
    },
  ],
  "soft-washing": [
    {
      name: "Trained Professionals",
      svg: shieldSvg,
      description:
        "We match the right low-pressure technique and chemical blend to your siding, roof, or concrete—never one-size-fits-all.",
    },
    {
      name: "Fully Insured & Equipped",
      svg: toolboxSvg,
      description:
        "Commercial-grade soft wash systems and full insurance on every job, residential or commercial.",
    },
    {
      name: "Surface-Safe Chemistry",
      svg: leafSvg,
      description:
        "Custom treatments lift algae and organic growth at the source while protecting paint, landscaping, and finishes.",
    },
    {
      name: "7-Day Clean Guarantee",
      svg: badgeSvg,
      description:
        "Not thrilled with the result? Call within seven days and we return to make it right.",
    },
  ],
  "holiday-lighting": [
    {
      name: "Trained Professionals",
      svg: shieldSvg,
      description:
        "Design, installation, maintenance, and removal handled by an experienced holiday lighting team.",
    },
    {
      name: "Fully Insured & Equipped",
      svg: toolboxSvg,
      description:
        "Bucket truck access for rooflines and elevations, premium LED inventory, and coverage you can trust.",
    },
    {
      name: "Free Custom Design",
      svg: leafSvg,
      description:
        "We plan your display before a single bulb goes up—tailored to your home, style, and budget.",
    },
    {
      name: "Full Season Support",
      svg: badgeSvg,
      description:
        "24-hour maintenance during the season and full takedown when the holidays end—hands-free for you.",
    },
  ],
  "post-construction-window-cleaning": [
    {
      name: "Trained Professionals",
      svg: shieldSvg,
      description:
        "Expert technicians trained to remove construction residue safely without scratching glass, frames, or finishes.",
    },
    {
      name: "Fully Insured & Equipped",
      svg: toolboxSvg,
      description:
        "Professional poles, ladders, and scraping tools for homes, high-rises, and new builds—safely every time.",
    },
    {
      name: "Safe on All Window Types",
      svg: leafSvg,
      description:
        "From impact glass to tinted and low-E windows, our process is gentle and completely safe for every type.",
    },
    {
      name: "Builder-Ready Finish Guarantee",
      svg: badgeSvg,
      description:
        "If you spot any residue after we leave, we come back and make it right—no questions asked, every time.",
    },
  ],
  "rain-shield": [
    {
      name: "Trained Rain Shield Technicians",
      svg: shieldSvg,
      description:
        "Certified technicians apply Rain Shield with consistent technique for even coverage and maximum long-term performance.",
    },
    {
      name: "Premium Hydrophobic Formula",
      svg: toolboxSvg,
      description:
        "We use a pro-grade hydrophobic formula that outperforms consumer products by repelling water, dirt, and salt.",
    },
    {
      name: "Safe on All Window Types",
      svg: leafSvg,
      description:
        "From impact glass to tinted and low-E windows, the coating is safe and effective on every pane type.",
    },
    {
      name: "Free With Quarterly Plan",
      svg: badgeSvg,
      description:
        "Rain Shield comes included free on every service with our quarterly plan—plus occasional seasonal promotions throughout the year.",
    },
  ],
};

const ChooseUs = ({ slug }) => {
  const services = chooseUsData[slug] ?? chooseUsData["solar-panel-cleaning"];

  return (
    <div>
      <div className="paper-bg-16 flex flex-col items-center gap-13.75 bg-[#262424] px-6 pt-12 md:py-24">
        <div>
          <div className="-mt-4 text-center font-['luminaire-script'] text-xl text-[#F3CA9E] underline">
            Why
          </div>
          <h2
            className="text-grain bg-[#FFFFFF]! text-[32px] tracking-wide md:text-6xl"
            data-text="CHOOSE US"
          >
            Choose US
          </h2>
        </div>
        <ServicesGrid services={services} />
      </div>
    </div>
  );
};

export default ChooseUs;

function ServicesGrid({ services }) {
  return (
    <div className="grid max-w-282.5 grid-cols-2 gap-3 pb-24 sm:px-10 md:grid-cols-4 md:gap-7.5 md:px-0 md:pb-0">
      {services.map((service, idx) => (
        <Card key={idx} className="paper-bg-8 rounded-sm bg-[#d5cdcb] p-0">
          <CardContent className="flex flex-col gap-3 px-4 py-8">
            {service.svg}
            <h3 className="font-[satoshi-bold] text-sm font-bold md:text-[20px]">
              {service.name}
            </h3>
            <p className="font-[satoshi-regular] text-xs text-[#1F1D1D] md:text-base">
              {service.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
