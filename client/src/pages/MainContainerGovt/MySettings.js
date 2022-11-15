import React from 'react';
import noPayment from './noPayment.png';

class MySettings extends React.Component{

	state={

    }

	componentDidMount=()=>{

	}

	componentWillUnmount=()=>{

	}

	render(){

		return(
				<div className='rightsidebar_container'>
					<div style={{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
						<div>
							<p className='rightsidebar_title'>My Settings</p>
						</div>
					</div>
					<div className='rightsidebar_content' style={{width:'100%', display:'flex', marginTop: 30, height:'auto'}}>
						<div style={{width:'100%', display:'flex', flexDirection:'column',gap:'30px', borderRadius:'8px', padding:'16px', flexWrap:'wrap', justifyContent:'center'}}>
							<div>
								<p>Name</p>
								<div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:'20px'}}>
									<input className="profile_form_input" type="text" defaultValue="You have not made any payments yet."/>
									<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M16 1.82843C16.2626 1.56578 16.5744 1.35744 16.9176 1.2153C17.2608 1.07316 17.6286 1 18 1C18.3714 1 18.7392 1.07316 19.0824 1.2153C19.4256 1.35744 19.7374 1.56578 20 1.82843C20.2626 2.09107 20.471 2.40287 20.6131 2.74603C20.7553 3.0892 20.8284 3.45699 20.8284 3.82843C20.8284 4.19986 20.7553 4.56766 20.6131 4.91082C20.471 5.25398 20.2626 5.56578 20 5.82843L6.5 19.3284L1 20.8284L2.5 15.3284L16 1.82843Z" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</div>
							</div>
							<div>
								<p>Email</p>
								<div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:'20px'}}>
									<input className="profile_form_input" type="text" defaultValue="something@something.com"/>
									<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M16 1.82843C16.2626 1.56578 16.5744 1.35744 16.9176 1.2153C17.2608 1.07316 17.6286 1 18 1C18.3714 1 18.7392 1.07316 19.0824 1.2153C19.4256 1.35744 19.7374 1.56578 20 1.82843C20.2626 2.09107 20.471 2.40287 20.6131 2.74603C20.7553 3.0892 20.8284 3.45699 20.8284 3.82843C20.8284 4.19986 20.7553 4.56766 20.6131 4.91082C20.471 5.25398 20.2626 5.56578 20 5.82843L6.5 19.3284L1 20.8284L2.5 15.3284L16 1.82843Z" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</div>
							</div>
							<div>
								<p>Description</p>
								<div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:'20px'}}>
									<textarea className="profile_form_textarea" type="text" defaultValue="None" style={{width:'85%'}}/>
									<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M16 1.82843C16.2626 1.56578 16.5744 1.35744 16.9176 1.2153C17.2608 1.07316 17.6286 1 18 1C18.3714 1 18.7392 1.07316 19.0824 1.2153C19.4256 1.35744 19.7374 1.56578 20 1.82843C20.2626 2.09107 20.471 2.40287 20.6131 2.74603C20.7553 3.0892 20.8284 3.45699 20.8284 3.82843C20.8284 4.19986 20.7553 4.56766 20.6131 4.91082C20.471 5.25398 20.2626 5.56578 20 5.82843L6.5 19.3284L1 20.8284L2.5 15.3284L16 1.82843Z" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</div>
							</div>
							<div>
								<p>Change Wallet</p>
								<div className="change_wallet_button">
									<svg width="186" height="19" viewBox="0 0 186 19" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0.888 9.624C0.888 7.992 1.264 6.528 2.016 5.232C2.784 3.936 3.816 2.928 5.112 2.208C6.424 1.472 7.856 1.104 9.408 1.104C11.184 1.104 12.76 1.544 14.136 2.424C15.528 3.288 16.536 4.52 17.16 6.12H13.872C13.44 5.24 12.84 4.584 12.072 4.152C11.304 3.72 10.416 3.504 9.408 3.504C8.304 3.504 7.32 3.752 6.456 4.248C5.592 4.744 4.912 5.456 4.416 6.384C3.936 7.312 3.696 8.392 3.696 9.624C3.696 10.856 3.936 11.936 4.416 12.864C4.912 13.792 5.592 14.512 6.456 15.024C7.32 15.52 8.304 15.768 9.408 15.768C10.416 15.768 11.304 15.552 12.072 15.12C12.84 14.688 13.44 14.032 13.872 13.152H17.16C16.536 14.752 15.528 15.984 14.136 16.848C12.76 17.712 11.184 18.144 9.408 18.144C7.84 18.144 6.408 17.784 5.112 17.064C3.816 16.328 2.784 15.312 2.016 14.016C1.264 12.72 0.888 11.256 0.888 9.624ZM26.0985 18.216C24.8505 18.216 23.7225 17.936 22.7145 17.376C21.7065 16.8 20.9145 16 20.3385 14.976C19.7625 13.936 19.4745 12.736 19.4745 11.376C19.4745 10.032 19.7705 8.84 20.3625 7.8C20.9545 6.76 21.7625 5.96 22.7865 5.4C23.8105 4.84 24.9545 4.56 26.2185 4.56C27.4825 4.56 28.6265 4.84 29.6505 5.4C30.6745 5.96 31.4825 6.76 32.0745 7.8C32.6665 8.84 32.9625 10.032 32.9625 11.376C32.9625 12.72 32.6585 13.912 32.0505 14.952C31.4425 15.992 30.6105 16.8 29.5545 17.376C28.5145 17.936 27.3625 18.216 26.0985 18.216ZM26.0985 15.84C26.8025 15.84 27.4585 15.672 28.0665 15.336C28.6905 15 29.1945 14.496 29.5785 13.824C29.9625 13.152 30.1545 12.336 30.1545 11.376C30.1545 10.416 29.9705 9.608 29.6025 8.952C29.2345 8.28 28.7465 7.776 28.1385 7.44C27.5305 7.104 26.8745 6.936 26.1705 6.936C25.4665 6.936 24.8105 7.104 24.2025 7.44C23.6105 7.776 23.1385 8.28 22.7865 8.952C22.4345 9.608 22.2585 10.416 22.2585 11.376C22.2585 12.8 22.6185 13.904 23.3385 14.688C24.0745 15.456 24.9945 15.84 26.0985 15.84ZM42.3392 4.56C43.3792 4.56 44.3072 4.776 45.1232 5.208C45.9552 5.64 46.6032 6.28 47.0672 7.128C47.5312 7.976 47.7632 9 47.7632 10.2V18H45.0512V10.608C45.0512 9.424 44.7552 8.52 44.1632 7.896C43.5712 7.256 42.7632 6.936 41.7392 6.936C40.7152 6.936 39.8992 7.256 39.2912 7.896C38.6992 8.52 38.4032 9.424 38.4032 10.608V18H35.6672V4.776H38.4032V6.288C38.8512 5.744 39.4192 5.32 40.1072 5.016C40.8112 4.712 41.5552 4.56 42.3392 4.56ZM57.9251 4.56C58.9651 4.56 59.8931 4.776 60.7091 5.208C61.5411 5.64 62.1891 6.28 62.6531 7.128C63.1171 7.976 63.3491 9 63.3491 10.2V18H60.6371V10.608C60.6371 9.424 60.3411 8.52 59.7491 7.896C59.1571 7.256 58.3491 6.936 57.3251 6.936C56.3011 6.936 55.4851 7.256 54.8771 7.896C54.2851 8.52 53.9891 9.424 53.9891 10.608V18H51.2531V4.776H53.9891V6.288C54.4371 5.744 55.0051 5.32 55.6931 5.016C56.3971 4.712 57.1411 4.56 57.9251 4.56ZM78.9591 11.064C78.9591 11.56 78.9271 12.008 78.8631 12.408H68.7591C68.8391 13.464 69.2311 14.312 69.9351 14.952C70.6391 15.592 71.5031 15.912 72.5271 15.912C73.9991 15.912 75.0391 15.296 75.6471 14.064H78.5991C78.1991 15.28 77.4711 16.28 76.4151 17.064C75.3751 17.832 74.0791 18.216 72.5271 18.216C71.2631 18.216 70.1271 17.936 69.1191 17.376C68.1271 16.8 67.3431 16 66.7671 14.976C66.2071 13.936 65.9271 12.736 65.9271 11.376C65.9271 10.016 66.1991 8.824 66.7431 7.8C67.3031 6.76 68.0791 5.96 69.0711 5.4C70.0791 4.84 71.2311 4.56 72.5271 4.56C73.7751 4.56 74.8871 4.832 75.8631 5.376C76.8391 5.92 77.5991 6.688 78.1431 7.68C78.6871 8.656 78.9591 9.784 78.9591 11.064ZM76.1031 10.2C76.0871 9.192 75.7271 8.384 75.0231 7.776C74.3191 7.168 73.4471 6.864 72.4071 6.864C71.4631 6.864 70.6551 7.168 69.9831 7.776C69.3111 8.368 68.9111 9.176 68.7831 10.2H76.1031ZM80.7396 11.376C80.7396 10.016 81.0116 8.824 81.5556 7.8C82.1156 6.76 82.8836 5.96 83.8596 5.4C84.8356 4.84 85.9556 4.56 87.2196 4.56C88.8196 4.56 90.1396 4.944 91.1796 5.712C92.2356 6.464 92.9476 7.544 93.3156 8.952H90.3636C90.1236 8.296 89.7396 7.784 89.2116 7.416C88.6836 7.048 88.0196 6.864 87.2196 6.864C86.0996 6.864 85.2036 7.264 84.5316 8.064C83.8756 8.848 83.5476 9.952 83.5476 11.376C83.5476 12.8 83.8756 13.912 84.5316 14.712C85.2036 15.512 86.0996 15.912 87.2196 15.912C88.8036 15.912 89.8516 15.216 90.3636 13.824H93.3156C92.9316 15.168 92.2116 16.24 91.1556 17.04C90.0996 17.824 88.7876 18.216 87.2196 18.216C85.9556 18.216 84.8356 17.936 83.8596 17.376C82.8836 16.8 82.1156 16 81.5556 14.976C81.0116 13.936 80.7396 12.736 80.7396 11.376ZM99.2342 7.008V14.328C99.2342 14.824 99.3462 15.184 99.5702 15.408C99.8102 15.616 100.21 15.72 100.77 15.72H102.45V18H100.29C99.0582 18 98.1142 17.712 97.4582 17.136C96.8022 16.56 96.4742 15.624 96.4742 14.328V7.008H94.9142V4.776H96.4742V1.488H99.2342V4.776H102.45V7.008H99.2342ZM132.926 1.32L127.982 18H124.886L121.382 5.376L117.662 18L114.59 18.024L109.862 1.32H112.766L116.222 14.904L119.966 1.32H123.038L126.518 14.832L129.998 1.32H132.926ZM134.271 11.328C134.271 10 134.543 8.824 135.087 7.8C135.647 6.776 136.399 5.984 137.343 5.424C138.303 4.848 139.359 4.56 140.511 4.56C141.551 4.56 142.455 4.768 143.223 5.184C144.007 5.584 144.631 6.088 145.095 6.696V4.776H147.855V18H145.095V16.032C144.631 16.656 143.999 17.176 143.199 17.592C142.399 18.008 141.487 18.216 140.463 18.216C139.327 18.216 138.287 17.928 137.343 17.352C136.399 16.76 135.647 15.944 135.087 14.904C134.543 13.848 134.271 12.656 134.271 11.328ZM145.095 11.376C145.095 10.464 144.903 9.672 144.519 9C144.151 8.328 143.663 7.816 143.055 7.464C142.447 7.112 141.791 6.936 141.087 6.936C140.383 6.936 139.727 7.112 139.119 7.464C138.511 7.8 138.015 8.304 137.631 8.976C137.263 9.632 137.079 10.416 137.079 11.328C137.079 12.24 137.263 13.04 137.631 13.728C138.015 14.416 138.511 14.944 139.119 15.312C139.743 15.664 140.399 15.84 141.087 15.84C141.791 15.84 142.447 15.664 143.055 15.312C143.663 14.96 144.151 14.448 144.519 13.776C144.903 13.088 145.095 12.288 145.095 11.376ZM154.184 0.24V18H151.448V0.24H154.184ZM160.513 0.24V18H157.777V0.24H160.513ZM176.225 11.064C176.225 11.56 176.193 12.008 176.129 12.408H166.025C166.105 13.464 166.497 14.312 167.201 14.952C167.905 15.592 168.769 15.912 169.793 15.912C171.265 15.912 172.305 15.296 172.913 14.064H175.865C175.465 15.28 174.737 16.28 173.681 17.064C172.641 17.832 171.345 18.216 169.793 18.216C168.529 18.216 167.393 17.936 166.385 17.376C165.393 16.8 164.609 16 164.033 14.976C163.473 13.936 163.193 12.736 163.193 11.376C163.193 10.016 163.465 8.824 164.009 7.8C164.569 6.76 165.345 5.96 166.337 5.4C167.345 4.84 168.497 4.56 169.793 4.56C171.041 4.56 172.153 4.832 173.129 5.376C174.105 5.92 174.865 6.688 175.409 7.68C175.953 8.656 176.225 9.784 176.225 11.064ZM173.369 10.2C173.353 9.192 172.993 8.384 172.289 7.776C171.585 7.168 170.713 6.864 169.673 6.864C168.729 6.864 167.921 7.168 167.249 7.776C166.577 8.368 166.177 9.176 166.049 10.2H173.369ZM182.109 7.008V14.328C182.109 14.824 182.221 15.184 182.445 15.408C182.685 15.616 183.085 15.72 183.645 15.72H185.325V18H183.165C181.933 18 180.989 17.712 180.333 17.136C179.677 16.56 179.349 15.624 179.349 14.328V7.008H177.789V4.776H179.349V1.488H182.109V4.776H185.325V7.008H182.109Z" fill="url(#paint0_linear_27_6275)"/>
										<defs>
										<linearGradient id="paint0_linear_27_6275" x1="46.5" y1="10" x2="196" y2="10" gradientUnits="userSpaceOnUse">
										<stop stop-color="#3DAEEE"/>
										<stop offset="1" stop-color="#EE883D"/>
										</linearGradient>
										</defs>
									</svg>
								</div>
							</div>
							<div>
								<p>Delete Account</p>
								<div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:'20px', color: '#979797'}}>
									Please be aware , by deleting your account, your will loose all your data permanently. 
								</div>
							</div>
							<div>
								<div className='delete_button'>
									Delete Account
								</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
};

export default MySettings;